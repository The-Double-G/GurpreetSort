# GurpreetSort

GurpreetSort is a comparison-based sorting algorithm created as a creative alternative to traditional sorting techniques. Instead of swapping elements or inserting them into a sorted region, GurpreetSort repeatedly removes out-of-order elements using `splice()` and appends them to the end of the array. After each relocation, the algorithm steps backward to re-check the updated position. Although not efficient, it is an excellent teaching tool for understanding array mutation, iterative correction, and algorithmic creativity.

---

## 🚀 JavaScript Implementation

```js
function gurpreetSort(arr) {
    let sorted = false;

    while (!sorted) {
        sorted = true;

        for (let i = 0; i < arr.length - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                const bigger = arr.splice(i, 1)[0];
                arr.push(bigger);
                i--;
                sorted = false;
            }
        }
    }

    return arr;
}
```

---

## 📌 Examples

### Example 1
```js
console.log(gurpreetSort([5, 3, 8, 1, 4]));
```

### Example 2 (Random Array)
```js
function randomArray(n, max = 100) {
    return Array.from({ length: n }, () => Math.floor(Math.random() * max));
}

console.log(gurpreetSort(randomArray(10)));
```

---

## 📘 Summary

GurpreetSort processes an array from left to right. When two adjacent elements are out of order, the larger element is removed using `splice()` and appended to the end. The index is then decremented to re-check the new element at that position. This continues until a full pass completes with no relocations.

---

## 🧩 Pseudocode

```
repeat
    sorted ← true
    for i ← 0 to n - 2 do
        if A[i] > A[i+1] then
            remove A[i] and append it to end
            i ← i - 1
            sorted ← false
until sorted = true
```

---

## ⏱️ Time Complexity

- **Worst Case:** O(n³)  
- **Average Case:** O(n³)  
- **Best Case:** O(n²)  
- **Space Complexity:** O(1)

---

## 🔑 Key Characteristics

- Comparison-based  
- In-place  
- Uses element relocation instead of swapping  
- Re-checks positions using backward stepping  
- Moves large elements toward the back through repeated “yeeting”  

---

## 🎨 Motivation

GurpreetSort was created as a creative challenge: sort an array without using any known sorting algorithm. The result is a unique “remove and append” mechanic that avoids classical patterns and provides a memorable way to understand array mutation and iterative correction.

---

## 🔍 Behavior Example (Step-by-Step)

Sorting:

```
[5, 3, 8, 1, 4]
```

**Pass 1:**
- 5 > 3 → remove 5 → append → `[3, 8, 1, 4, 5]`
- 8 > 1 → remove 8 → append → `[3, 1, 4, 5, 8]`
- 3 > 1 → remove 3 → append → `[1, 4, 5, 8, 3]`
- ...

Eventually:

```
[1, 3, 4, 5, 8]
```

This demonstrates the algorithm’s signature behavior:  
**repeatedly “yeeting” large elements to the back** until the array stabilizes.

---

## 🎓 Use Cases

GurpreetSort is valuable in educational contexts:

- Demonstrates array mutation (`splice`, `push`, index shifting)  
- Shows how local comparisons affect global order  
- Illustrates iterative correction  
- Reinforces re-checking after mutation  
- Encourages algorithmic creativity  
- Provides a memorable mental model (“yeet the big one to the back”)  
- Easier for beginners to visualize than classical sorts  

---

## ⚠️ Limitations

- Very slow on large arrays (O(n³))  
- Performs many unnecessary element shifts  
- Not stable (equal elements may change order)  
- Not used in real-world applications  
- Highly dependent on `splice()`  

These limitations make it a great teaching tool for understanding why efficient algorithms matter.

---

## 📊 Comparison Table

```
+----------------+-------------------------------+----------+----------------+----------------------------------------------+
|   Algorithm    |            Mechanic           | Stability| Time Complexity|                   Notes                      |
+----------------+-------------------------------+----------+----------------+----------------------------------------------+
| Bubble Sort    | Swaps adjacent elements       |   Yes    |   O(n^2)       | Classic left-to-right neighbor swapping      |
| Gnome Sort     | Swap + step backward          |   Yes    |   O(n^2)       | Similar backward step behavior               |
| Insertion Sort | Inserts into sorted prefix    |   Yes    |   O(n^2)       | Efficient element relocation                 |
| GurpreetSort   | Splice element + append to end|    No    |   O(n^3)       | Unique "yeet to back" relocation mechanic    |
+----------------+-------------------------------+----------+----------------+----------------------------------------------+
```

---

## 📄 License

MIT License (or any license you prefer)

