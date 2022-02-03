const pets = ['cat', 'dog', 'rat']
// for (begin index; end condition; how much to add?)

for (let i = 0; i < pets.length; i++){
  pets[i] = pets[i] + 's'
}
console.log(pets)