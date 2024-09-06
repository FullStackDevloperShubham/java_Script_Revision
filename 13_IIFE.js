
// Immediate Envoked funcion Expressitio
// IIFE

(function Code() {
  // named IIFE
  console.log("database");
}());

((name) => {
  console.log(`db name \t${name}`);
})('mongodb')

