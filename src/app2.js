//Domain components
let pronouns = ['the', 'our', 'his', 'her', 'their', 'my', 'your'];
let adjectives = ['great', 'big', 'amazing', 'small', 'fast', 'slow', 'funny', 'serious'];
let nouns = ['jogger', 'racoon', 'dog', 'driver', 'cat', 'bird', 'fish', 'house', 'car', 'tree', 'flower'];
let extensions = ['.com', '.net', '.org','.co', '.uy', '.ar', '.edu'];

// Domain container
let domains = [];

// Generating the domains
for (let i = 0; i < pronouns.length; i++) {
  for (let j = 0; j < adjectives.length; j++) {
    for (let k = 0; k < nouns.length; k++) {
      for (let l = 0; l < extensions.length; l++)   
 {
        domains.push(pronouns[i] + adjectives[j] + nouns[k] + extensions[l]);
      }
    }
  }
}

// Printing domains
console.log(domains);