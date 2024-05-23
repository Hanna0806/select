const options = [{
    label: 'Витебск',
    value: 2
},
{
    label: 'Гомель',
    value: 3
},
{
    label: 'Могилев',
    value: 5
},
{
    label: 'Брест',
    value: 1
},
{
    label: 'Гродно',
    value: 4
},
{
    label: 'Минск',
    value: 7
},
]

class Select {
    constructor(selector, options, width) {
        this.$select = document.querySelector(selector);
        this.options = options;
        this.$select.style.setProperty('--selected-width', width);
        this.$label = document.querySelector('.select__label');
        this.$drobDown = document.querySelector('.select__drob-down');

        this.itemsForDropDown = options.map(({ label, value }) => {
            return `<li data-id=${value}>${label}</li>`
        }).join('')
        

        this.$drobDown.insertAdjacentHTML('afterbegin', this.itemsForDropDown)

        this.$select.addEventListener('click', (e) => {
            console.log(e.target);
            console.log(e.target.tagName);
            if (e.target.classList.contains('select__label')) {
                console.log('ты кликнул на лебел')
            } else {
                if(e.target.tagName.toLowerCase() === 'li') {
                    console.log('ты кликнул на ли');
                    console.log(e.target.dataset.id);
                    this.selectItem(+e.target.dataset.id)
                }
            }
        })

    }

    selectItem(id) {
const selectedElement = this.options.find(item => item.value === id)
this.$label.innerHTML = selectedElement.label
    }
}

const customSelect = new Select('.select', options, '350px')
console.log(customSelect);

