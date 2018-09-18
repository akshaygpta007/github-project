export const getRepositoryData = (repository, id, index = 0) => {
    let name = '- - -';
    let description = '- - -';
    let repo_url = '- - -';
    let language = '- - -';
    let createdOn = '';
    if (repository && repository[id] && repository[id][index]) {
        if (repository[id][index].name) {
            name = repository[id][index].name;
        }
        if (repository[id][index].description) {
            description = repository[id][index].description;
        }
        if (repository[id][index].html_url) {
            repo_url = repository[id][index].html_url;
        }
        if (repository[id][index].language) {
            language = repository[id][index].language;
        }
        if (repository[id][index].created_at) {
            createdOn = repository[id][index].created_at;
        }
    }
    return { name, description, repo_url, language, createdOn };
}

export const CELL = {
    NAME: {
        TITLE: 'Repository Name:', 
        ICON: 'archive'
    },
    DESCRIPTION: {
        TITLE: 'Repository Description:', 
        ICON: 'folder'
    },
    URL: {
        TITLE: 'Repository Url:', 
        ICON: 'link'
    },
    LANGUAGE: {
        TITLE: 'Language:', 
        ICON: 'language'
    },
    CREATED_ON: {
        TITLE: 'Created On:', 
        ICON: 'date-range'
    }
}

export const getIcon = () => {

}