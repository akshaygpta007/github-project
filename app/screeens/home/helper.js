export const SORT_BY = {
    title: {
        text: "Sort By",
        value: 0,
    },
    nameAscending: {
        text: "Name (A - Z)",
        value: 1,
    },
    nameDescending: {
        text: "Name (Z - A)",
        value: 2,
    },
    renkAscending: {
        text: "Rank Asc",
        value: 3,
    },
    rankDescending: {
        text: "Rank Desc",
        value: 4,
    }
};

export const getDefaultSorting = () => SORT_BY.title.value;

const getSortByFilter = (filter) => {
    let filterType = { string: "login", isDesc: false };
    if (filter === 1) {
        filterType = { string: "login", isDesc: false };
    } else if (filter === 2) {
        filterType = { string: "login", isDesc: true };
    } else if (filter === 3) {
        filterType = { string: "score", isDesc: false };
    } else if (filter === 4) {
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