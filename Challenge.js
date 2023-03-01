// Challenge: Page replacement algorithms: FIFO (7 kyu)

// Description:

// In a computer operating system that uses paging for virtual memory management, page replacement algorithms decide which memory pages to page out when a page of memory needs to be allocated. Page replacement happens when a requested page is not in memory (page fault) and a free page cannot be used to satisfy the allocation, either because there are none, or because the number of free pages is lower than some threshold.

// The FIFO page replacement algorithm
// The first-in, first-out (FIFO) page replacement algorithm is a low-overhead algorithm that requires little bookkeeping on the part of the operating system. The idea is obvious from the name: the operating system keeps track of all the pages in memory in a queue, with the most recent arrival at the back, and the oldest arrival in front. When a page needs to be replaced, the oldest page is selected. Note that a page already in the queue is not pushed at the end of the queue if it is referenced again.

// Your task is to implement this algorithm. The fifo function will take two parameters as input: the number of maximum pages that can be kept in memory at the same time n and a reference list containing numbers. Every number represents a page request for a specific page (you can see this number as the unique ID of a page). The expected output is the status of the memory after the application of the algorithm. Note that when a page is inserted in the memory, it stays at the same position until it is removed from the memory by a page fault.

// Example:
// Given:

// N = 3,
// REFERENCE LIST = [1, 2, 3, 4, 2, 5],

//   * 1 is read, page fault --> memory = [1];
//   * 2 is read, page fault --> memory = [1, 2];
//   * 3 is read, page fault --> memory = [1, 2, 3];
//   * 4 is read, page fault --> memory = [4, 2, 3];
//   * 2 is read, already in memory, nothing happens;
//   * 5 is read, page fault --> memory = [4, 5, 3].

// So, at the end we have the list [4, 5, 3], which is what you have to return. If not all the slots in the memory get occupied after applying the algorithm, fill the remaining slots (at the end of the list) with -1 to represent emptyness (note that the IDs will always be >= 1).

// My code below:

const fifo = (n, referenceList) => {
  const result = new Array(n).fill(-1);
  let index = 0;

  referenceList.foreach(num => {
    if(!result.includes(num)) {
      result[index] = num;
      // determine value of next index
      index = (index + 1) % n;
    }
  });

  return result;
};

// Notes on logic

// including only the numbers that have an equal index and last index (i.e. the number in question) excludes duplicates

// Tests

console.log(fifo(3, [1, 2, 3, 4, 2, 5])); // [4, 5, 3]
console.log(fifo(5, [])); // [-1, -1, -1, -1, -1]
console.log(fifo(4, [1, 2, 3, 3, 4, 5, 1])); // [5, 1, 3, 4]
console.log(fifo(4, [1, 1, 1, 2, 2, 3])); // [1, 2, 3, -1]
console.log(fifo(1, [5, 4, 3, 3, 4, 10],)); // [10]
console.log(fifo(3, [1, 1, 1, 1, 1, 1, 1, 1])); // [1, -1, -1]
console.log(fifo(5, [10, 9, 8, 7, 7, 8, 7, 6, 5, 4, 3, 4, 3, 4, 5, 6, 5])); // [5, 4, 3, 7, 6]