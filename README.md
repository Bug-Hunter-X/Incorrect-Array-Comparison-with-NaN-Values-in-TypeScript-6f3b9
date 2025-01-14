# Incorrect Array Comparison with NaN Values in TypeScript

This repository demonstrates a common, yet subtle, bug in TypeScript when comparing arrays that might contain `NaN` values.  The provided code implements a function to compare two number arrays for equality. However, it fails to correctly handle cases where `NaN` is present.  The solution illustrates how to correctly compare arrays including the potential presence of `NaN` values.

## Bug

The `compareArrays` function uses strict equality (`===`) to compare array elements.  Since `NaN !== NaN`, the comparison will incorrectly return `true` even if the arrays contain `NaN` at corresponding positions. This behavior is inconsistent with typical expectations of array equality.

## Solution

The solution utilizes the `Number.isNaN()` function to correctly handle `NaN` values during the comparison. This ensures that `NaN` elements are treated as equal only when compared to other `NaN` values.