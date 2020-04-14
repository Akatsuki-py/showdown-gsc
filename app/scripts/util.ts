export const URLExists = (URL: string): boolean => {
    const http = new XMLHttpRequest();
    http.open('HEAD', URL, false);
    http.send();
    return http.status != 404;
};
