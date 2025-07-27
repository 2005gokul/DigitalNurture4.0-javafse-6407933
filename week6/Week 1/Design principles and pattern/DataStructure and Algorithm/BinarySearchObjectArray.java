public class BinarySearchObjectArray {

    public int binarySearch(Product[] people, int targetId) {
        int left = 0;
        int right = people.length - 1;

        while (left <= right) {
            int mid = left + (right - left) / 2;
            int cmp = Integer.compare(people[mid].productid, targetId);

            if (cmp == 0) {
                return mid;
            } else if (cmp < 0) {
                left = mid + 1;
            } else {
                right = mid - 1;
            }
        }

        return -1;
    }
}