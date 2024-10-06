// src/data/questions.js

export const questions = [
  {
    id: 1,
    question:
      "You have a binary search tree where every node stores the number of nodes in its left and right subtrees. Design an algorithm to find the kth smallest element efficiently.",
    options: {
      A: "O(n) traversal",
      B: "O(log n) using size property",
      C: "O(log n) with extra space",
      D: "O(n^2) comparison",
    },
    correctAnswer: "B",
  },
  {
    id: 2,
    question:
      "Imagine a 2D grid graph where each cell can either be a wall or an open space. Design a data structure that supports fast path-finding between any two cells while allowing for dynamic updates (adding/removing walls).",
    options: {
      A: "Segment Tree",
      B: "Trie",
      C: "Dynamic Graph Data Structure",
      D: "Binary Indexed Tree",
    },
    correctAnswer: "C",
  },
  {
    id: 3,
    question:
      "Given a compressed suffix array of a string, explain how you would find the Longest Common Prefix (LCP) of any two suffixes efficiently.",
    options: {
      A: "Using Binary Search on the Suffix Array",
      B: "Using LCP and RMQ",
      C: "Using Brute Force",
      D: "Using KMP Algorithm",
    },
    correctAnswer: "B",
  },
  {
    id: 4,
    question:
      "You are implementing a min-heap for a priority queue but want to support constant-time (O(1)) access to the minimum element, median element, and maximum element. What hybrid data structure would you use?",
    options: {
      A: "AVL Tree",
      B: "Double-ended Priority Queue",
      C: "Min-Max Heap",
      D: "Trie with Priority Queue",
    },
    correctAnswer: "C",
  },
  {
    id: 5,
    question:
      "Given a large set of key-value pairs where keys are strings, you want to build a data structure that supports efficient prefix search, insertion, and deletion in O(1) time. What type of hashing technique would you use?",
    options: {
      A: "Perfect Hashing",
      B: "Cuckoo Hashing",
      C: "Trie with Hash Map",
      D: "Bloom Filter",
    },
    correctAnswer: "A",
  },
  {
    id: 6,
    question:
      "Design a custom data structure that supports push, pop, top, and retrieving the median element in O(log n) time.",
    options: {
      A: "Stack with Binary Search Tree",
      B: "AVL Tree",
      C: "Heap and Queue",
      D: "Two Heaps (Max and Min)",
    },
    correctAnswer: "D",
  },
  {
    id: 7,
    question:
      "You have a file system-like structure represented as a n-ary tree. Design a method to find the *deepest common directory* of any two files.",
    options: {
      A: "Lowest Common Ancestor (LCA) Algorithm",
      B: "Tarjan’s Algorithm",
      C: "Breadth-First Search (BFS)",
      D: "Depth-First Search (DFS)",
    },
    correctAnswer: "A",
  },
  {
    id: 8,
    question:
      "Implement a versioned stack that allows you to ‘push’ and ‘pop’ elements while supporting the ability to revert to any previously saved state in O(1) time.",
    options: {
      A: "Persistent Stack using Copy-on-Write",
      B: "AVL Tree",
      C: "Stack with Rollback Array",
      D: "Linked List with Snapshots",
    },
    correctAnswer: "A",
  },
  {
    id: 9,
    question:
      "Given a large stream of integers, design a data structure that can return the k most frequent elements in the stream in O(log k) time.",
    options: {
      A: "Priority Queue",
      B: "Trie with Frequency Map",
      C: "Hash Map + Min Heap",
      D: "AVL Tree with Frequencies",
    },
    correctAnswer: "C",
  },
  {
    id: 10,
    question:
      "You have a sequence of stock prices, and you want to find the maximum profit by choosing a single buy-sell transaction. How would you implement a solution using a single pass of the data?",
    options: {
      A: "O(n) traversal using Min and Max trackers",
      B: "O(n^2) comparisons",
      C: "Binary Search",
      D: "Prefix Sum Array",
    },
    correctAnswer: "A",
  },
];
