export default (baseModel, bookshelf) => {
    return bookshelf.Model.extend({
        tableName: 'clients',
        serialize(request) {
            return {
                id: this.get('id'),
                type: 'clients',
                attributes: this.omit('id')
            };
        }
    });
};