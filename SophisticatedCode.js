/*
Filename: SophisticatedCode.js

This code demonstrates a sophisticated and elaborate implementation of a text analyzer. It analyzes a given text input, counting the number of occurrences for each word, and provides various statistics such as average word length, most frequent word, and longest word.

Note: To run this code, you need a text input and call the 'analyzeText' function, passing the text as a parameter.

Usage Example:
analyzeText('Hello there! This is a test. Hello world!');
*/

function analyzeText(text) {
    // Remove special characters and convert to lowercase
    const sanitizedText = text.replace(/[^\w\s]/g, '').toLowerCase();

    // Split the text into an array of words
    const words = sanitizedText.split(/\s+/);

    // Object to store word counts
    const wordCounts = {};

    // Iterate over each word, count occurrences
    for (let i = 0; i < words.length; i++) {
        const word = words[i];
        wordCounts[word] = (wordCounts[word] || 0) + 1;
    }

    // Calculate average word length
    let totalWordLength = 0;
    for (const word of words) {
        totalWordLength += word.length;
    }
    const averageWordLength = totalWordLength / words.length;

    // Find the most frequent word
    let mostFrequentWord = '';
    let maxOccurrences = 0;
    for (const word in wordCounts) {
        if (wordCounts[word] > maxOccurrences) {
            maxOccurrences = wordCounts[word];
            mostFrequentWord = word;
        }
    }

    // Find the longest word
    let longestWord = '';
    for (const word of words) {
        if (word.length > longestWord.length) {
            longestWord = word;
        }
    }

    // Output results
    console.log('Text analysis results:');
    console.log('----------------------------');
    console.log(`Total words: ${words.length}`);
    console.log(`Average word length: ${averageWordLength.toFixed(2)} characters`);
    console.log(`Most frequent word: "${mostFrequentWord}" (${maxOccurrences} occurrences)`);
    console.log(`Longest word: "${longestWord}" (${longestWord.length} characters)`);
    console.log('----------------------------');
}

// Call the analyzeText function with your desired text input
analyzeText('Hello there! This is a test. Hello world!');