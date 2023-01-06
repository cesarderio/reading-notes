# Class 30 reading notes

#### [HOME](https://cesarderio.github.io/reading-notes/)

## Hashtables

[Intro to Hash Tables](https://codefellows.github.io/common_curriculum/data_structures_and_algorithms/Code_401/class-30/resources/Hashtables.html)

Hashtables are a data structure to store the key (hashed/encoded content)(original string/value) / value (original string/value) pairs. This means that it holds an encoded/hash of the key that is tied to a specific location in the data structure where we can get the paired value.

**Hashing** takes the input (key) and turns it into an integer. The output (integer) is / should always be determined by the input.

**Hash** - process of taking an input (string) and converting it to a value, often used as a security measure.

**Buckets** - is what is stored in the index of the array of the hashtable. Each index is a stand-alone **bucket**.

**Collisions** - when a bucket (index) has more than one key.

Hash maps do this to store values:

* accept a key

* calculate the hash of the key

* use modulus to convert the hash into an array index

*store the key with the value by appending both to the end of a linked list

Hash maps do this to read value:

* accept a key

* calculate the hash of the key

* use modulus to convert the hash into an array index

* use the array index to access the short LinkedList representing a bucket

* search through the bucket looking for a node with a key/value pair that matches the key you were given

#### Hashtable Methods

##### **set()**

To add a new key/value pair to a hashtable:

* send input key to hash() method.

* determine and check location for existing value at location/index.

* If something does not exist at that index already, add it with the key/value pair.

* If something does exist, add the new key/value pair to a new node inside the bucket.

##### **get()**

* takes in a key, gets the Hash, and goes to the mapped index for that key.

#### **has()**

* takes in a key and checks to see if it exists inside the hastable.

##### **keys()**

* returns an array of unique hash keys.

##### **hash()**

* takes a key as a string, hashes the key, then return the index of the array where the key/value should be placed.

#### More Resources

[what is a hash table?](https://www.youtube.com/watch?v=MfhjkfocRR0)
[basics of hash tables](https://www.hackerearth.com/practice/data-structures/hash-tables/basics-of-hash-tables/tutorial/)
[hash table wiki](https://en.wikipedia.org/wiki/Hash_table)
