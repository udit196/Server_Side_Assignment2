const jsonString = '{"name": "John", "age": 30, "city": "New York"';
try {
    const jsonData = JSON.parse(jsonString);
    console.log("Parsed JSON data:", jsonData);
} catch (error) {
    if (error instanceof SyntaxError) {
        console.error("Invalid JSON:", error.message);
    } else {
        throw error;
    }
}