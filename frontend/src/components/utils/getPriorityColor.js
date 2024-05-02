
export const getPriorityColor = (priority) => {
    switch (priority) {
        case 1:
            return 'bg-red-200 text-red-800';
        case 2:
            return 'bg-yellow-200 text-yellow-800';
        case 3:
            return 'bg-green-200 text-green-800';
        case 4:
            return 'bg-blue-200 text-blue-800';
        default:
            return 'bg-gray-200 text-gray-800';
    }
};
