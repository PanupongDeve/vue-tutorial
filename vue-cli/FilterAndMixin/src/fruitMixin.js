export const fruitMixin = {
    data() {
        return {
            text: 'Hello there!',
            fruits: ['Apple', 'Banana', 'Mango', 'Malon'],
            filterText: ''
        }
    },
    computed: {
        filteredFruits() {
            return this.fruits.filter((element) => {
                let elementLower = element.toLowerCase();
                let filterTextLower = this.filterText.toLowerCase();
                return elementLower.match(filterTextLower);
            });
        }
    }
}