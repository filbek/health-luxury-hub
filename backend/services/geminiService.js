import { spawn } from 'child_process';
import { promisify } from 'util';

/**
 * Execute Gemini CLI with the given prompt and options
 * @param {string} prompt - The prompt to send to Gemini
 * @param {Object} options - CLI options
 * @returns {Promise<string>} - The response from Gemini
 */
export const execGeminiCLI = async (prompt, options = {}) => {
  return new Promise((resolve, reject) => {
    // Build CLI arguments
    const args = [];
    
    // Add model if specified
    if (options.model) {
      args.push('-m', options.model);
    }
    
    // Add prompt
    if (prompt) {
      args.push('-p', prompt);
    }
    
    // Add debug mode if specified
    if (options.debug) {
      args.push('-d');
    }
    
    // Add sandbox mode if specified
    if (options.sandbox) {
      args.push('-s');
    }
    
    // Add YOLO mode if specified
    if (options.yolo) {
      args.push('-y');
    }

    console.log('Executing Gemini CLI with args:', args);

    // Spawn the Gemini CLI process
    const geminiProcess = spawn('gemini', args, {
      stdio: ['pipe', 'pipe', 'pipe'],
      shell: true,
      env: {
        ...process.env,
        GEMINI_API_KEY: process.env.GEMINI_API_KEY
      }
    });

    let stdout = '';
    let stderr = '';

    // Collect stdout data
    geminiProcess.stdout.on('data', (data) => {
      stdout += data.toString();
    });

    // Collect stderr data
    geminiProcess.stderr.on('data', (data) => {
      stderr += data.toString();
    });

    // Handle process completion
    geminiProcess.on('close', (code) => {
      if (code === 0) {
        // Success - return the response
        const response = stdout.trim();
        if (response) {
          resolve(response);
        } else {
          reject(new Error('Empty response from Gemini CLI'));
        }
      } else {
        // Error - reject with error message
        const errorMessage = stderr || `Gemini CLI exited with code ${code}`;
        console.error('Gemini CLI error:', errorMessage);
        reject(new Error(errorMessage));
      }
    });

    // Handle process errors
    geminiProcess.on('error', (error) => {
      console.error('Failed to start Gemini CLI process:', error);
      reject(new Error(`Failed to start Gemini CLI: ${error.message}`));
    });

    // If there's input data, write it to stdin
    if (prompt && !args.includes('-p')) {
      geminiProcess.stdin.write(prompt);
      geminiProcess.stdin.end();
    }
  });
};

/**
 * Test Gemini CLI connection
 * @returns {Promise<boolean>} - True if connection is successful
 */
export const testGeminiConnection = async () => {
  try {
    const response = await execGeminiCLI('Hello, please respond with "Connection successful"', {
      model: 'gemini-2.5-pro'
    });
    
    return response.toLowerCase().includes('connection successful') || 
           response.toLowerCase().includes('hello') ||
           response.length > 0;
  } catch (error) {
    console.error('Gemini connection test failed:', error);
    return false;
  }
};

/**
 * Get available Gemini models (if supported by CLI)
 * @returns {Promise<Array>} - Array of available models
 */
export const getAvailableModels = async () => {
  // This is a placeholder - the actual implementation would depend on
  // whether the Gemini CLI supports listing models
  return [
    'gemini-2.5-pro',
    'gemini-1.5-pro',
    'gemini-1.5-flash'
  ];
};

export default {
  execGeminiCLI,
  testGeminiConnection,
  getAvailableModels
};
