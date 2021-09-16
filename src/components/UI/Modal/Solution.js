function binary_search(arr, left, right, num) {
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);

        if (arr[mid] <= num)
            left = mid + 1;
        else
            right = mid - 1;
    }
    return right;
}

function countEleLessThanOrEqual(arr1, arr2, m, n) {
    // Sort the 2nd array
    arr2.sort(function (a, b) { return a - b; });

    // for each element of 1st array
    for (let i = 0; i < m; i++) {
        // Last index of largest element
        // smaller than or equal to x
        let index = binary_search(
            arr2, 0, n - 1, arr1[i]);

        // Required count for the element arr1[i]
        document.write((index + 1) + " ");
    }
}