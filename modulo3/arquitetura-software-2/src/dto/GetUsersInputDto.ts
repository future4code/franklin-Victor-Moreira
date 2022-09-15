export interface GetUsersInputDto {
    token: string | undefined,
    search: string,
    order: string,
    sort: string,
    limit: string,
    page: string
}