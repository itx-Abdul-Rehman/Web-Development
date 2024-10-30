const tf = require('@tensorflow/tfjs');

// Your TensorFlow.js code here
console.log(tf.version.tfjs);  // Logs the TensorFlow.js version

// Example: Create a tensor
const tensor = tf.tensor([1, 2, 3, 4], [2, 2]);
tensor.print();  