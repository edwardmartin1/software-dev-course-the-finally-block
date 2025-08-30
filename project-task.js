/*
===========================================
📂 File Processing Simulation with Exceptions
===========================================

🎯 Objective:
This activity will help students:

- Identify and explain JavaScript's standard exceptions through practical examples
- Implement `finally` blocks to manage resources and ensure consistent cleanup

---
📘 Scenario:
You’ve been hired to create a system that simulates file processing for a virtual library.

The system must:
- Validate user input (file names and data)
- Simulate file reading/writing operations
- Ensure all resources (e.g., file handles) are closed, even if errors occur

---
🧭 Instructions:

Step 1: Debug Standard Exceptions  
- Run the starter code and identify the standard exceptions being thrown  
- Correct the issues and observe output

Step 2: Add Input Validation and Custom Exceptions  
- Validate:
  • Missing file names 
  • Non-string file data  
  • Empty string data 

Step 3: Implement a `finally` Block  
- Simulate releasing resources, regardless of whether an error occurred

Step 4: Test Your Solution  
- Use a variety of inputs to confirm the `finally` block always executes
*/

// ============================================
// 🛠️ Starter Code: processFile Function
// ============================================


function processFile(fileName, fileData) 
{
  try 
  {
    // TODO: Add input validation here  
    if (!fileName || typeof fileName !== "string") 
    {
      throw new Error("Filename is not valid")
    }   

    if (!fileData || typeof fileData !== "string")
    {
      throw new Error("Filedata is not valid");
    }
    
    // TODO: Implement simulated file processing here
    console.log(`Processing file: ${fileName}`);
    console.log(`File content: ${fileData}`);
    
    // TODO: Add simulated file operations (reading/writing)
    console.log(`Reading from file: ${fileName}`);
    console.log(`Writing "${fileData}" to file: ${fileName}`);    
  } 
  catch (err) 
  {
    // TODO: Implement error handling
    console.error(`Error trying to process file: ${err.message}`);
  }
  // TODO: Implement a finally block to close resources
  finally 
  {
    if (typeof fileName !== "string" && typeof fileName !== "number")
    {
      fileName = "";
    }

    console.log(`Closing file: ${fileName}`);
  }
}

// ============================================
// 🧪 Test Cases Below
// ============================================

console.log("Test 1");
processFile("", "Hello, world!");
console.log("Test 2");
processFile(42, "Hello, world!");
console.log("Test 3");
processFile(true, "Hello, world!");
console.log("Test 4");
processFile(); // ❌ ReferenceError: File name is missing
console.log("Test 5");
processFile("myFile.txt", 42); // ❌ TypeError: File data must be a string
console.log("Test 6");
processFile("myFile.txt", ""); // ❌ Error: File data cannot be empty
console.log("Test 7");
processFile("myFile.txt", "Hello, world!"); // ✅ Should process successfully



