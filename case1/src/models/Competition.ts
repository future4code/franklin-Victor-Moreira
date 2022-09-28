export class Competition {
    constructor(
        private id: string,
        private title: string,
        private status: boolean
    ) { }
    
    public getId = () => {
        return this.id
    }

    public getTitle = () => {
        return this.title
    }

    public getStatus = () => {
        return this.status
    }

    public setId = (newId: string) => {
        this.id = newId
    }

    public setTitle = (newTitle: string) => {
        this.title = newTitle
    }
    
    public setStatus = (newStatus: boolean) => {
        this.status = newStatus
    }
}