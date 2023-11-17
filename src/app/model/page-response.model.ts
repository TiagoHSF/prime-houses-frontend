export interface PageResponse<T> {
    content?: T[];
    pageable?: {
        sort?: {
            unsorted?: boolean;
            sorted?: boolean;
            empty?: boolean
        };
        pageSize?: number;
        pageNumber?: number;
        offset?: number;
        paged?: boolean;
        unpaged?: boolean
    };
    last?: boolean;
    totalPages?: number;
    totalElements?: number;
    first?: boolean;
    sort?: {
        unsorted?: boolean;
        sorted?: boolean;
        empty?: boolean
    };
    numberOfElements?: number;
    size?: number;
    number?: number;
    empty?: boolean;
}
