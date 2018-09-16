export const SORT_BY = {
    nameAscending: {
        text: "Name (A - Z)",
        value: 0,
    },
    nameDescending: {
        text: "Name (Z - A)",
        value: 1,
    },
    rankAscending: {
        text: "Rank Asc",
        value: 2,
    },
    rankDescending: {
        text: "Rank Desc",
        value: 3,
    },
    cancel: {
        text: "Cancel",
        value: 4,
    },
    title: {
        text: "Sort By",
        value: 5,
    },
};

export const SORT_BY_OPTIONS = [
    SORT_BY.nameAscending.text,
    SORT_BY.nameDescending.text,
    SORT_BY.rankAscending.text,
    SORT_BY.rankDescending.text,
    SORT_BY.cancel.text
];

export const getDefaultSorting = () => SORT_BY.nameAscending.value;

const getSortByFilter = (filter) => {
    let filterType = { string: "login", isDesc: false };
    if (filter === SORT_BY.nameAscending.value) {
        filterType = { string: "login", isDesc: false };
    } else if (filter === SORT_BY.nameDescending.value) {
        filterType = { string: "login", isDesc: true };
    } else if (filter === SORT_BY.rankAscending.value) {
        filterType = { string: "score", isDesc: false };
    } else if (filter === SORT_BY.rankDescending.value) {
        filterType = { string: "score", isDesc: true };
    }
    return filterType;
}

export const sortData = (data = [], filter = 1) => {
    const { string: sortString, isDesc } = getSortByFilter(filter);
    return data.sort((val1, val2) => {
        if(val1[sortString] < val2[sortString]) return isDesc ? 1 : -1;
        if(val1[sortString] > val2[sortString]) return isDesc ? -1 : 1;
        return 0;
    });
}