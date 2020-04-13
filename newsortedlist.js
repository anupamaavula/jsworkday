// 21.Write a function that merges two sorted lists into a new sorted list. [1,4,6],[2,3,5]
// → [1,2,3,4,5,6]. You can do this quicker than concatenating them followed by a
// sort.


function merge_two_sorted_arrays(arr1, arr2) {
        let i = 0;
        let j = 0;
        let result = [];
        while(i < arr1.length && j < arr2.length) {
            if(arr1[i] <= arr2[j]) {
                result.push(arr1[i]);
                i++;
            } else {
                result.push(arr2[j]);
                j++;
            }
        }
        while(i < arr1.length ) {
            result.push(arr1[i]);
            i++;
        }
        while(j < arr2.length ) {
            result.push(arr2[j]);
            j++;
        }
        console.log(result);
    }

merge_two_sorted_arrays([15, 22, 36, 32, 88], [3, 4, 5 ]);