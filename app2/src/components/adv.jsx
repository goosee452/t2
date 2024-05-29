export class Adv{
    advTitle;
    price;
    rooms;
    space;
    l_Space; //living space
    city;
    type;//flat|house|space
    floorsAm; //floors amount
    elevator;
    view;
    cookerType;//gas/electric

    constructor(){
        this.advTitle = '';
        this.price = 0;
        this.rooms = 0;
        this.space = 0
        this.l_Space = 0
        this.city = 'Minsk'
        this.type = 'flat'
        this.floorsAm = 0
        this.elevator = false
        this.view = 'to park'
        this.cookerType = 'gas'

        this.render = this.render.bind(this);
    }

    genRand(){
        this.advTitle = 'lorem';
        this.price = Math.round((((Math.random() * 10) % 2) + 3) * 100) /  100;
        this.rooms = Math.round(Math.random() * 10) % 4
        this.space = Math.round((((Math.random() * 1000) % 200)) * 100) /  100;
        this.l_Space = Math.round((((Math.random() * 1000) % this.space)) * 100) /  100;
        let names = ['Minsk', 'Gomel', 'Grodno', 'Mogilev', 'Vitebsk', 'Brest'];
        this.city = names[Math.floor(Math.random() * 10 % 7)];
        let types = ['flat', 'house', 'space'];
        this.type = types[Math.floor(Math.random() * 10 % 3)];
        if(this.type == 'house'){
            this.floorsAm = Math.floor(Math.random() * 10 % 3)
        }
        if(this.type == 'flat'){
            this.elevator = Math.random() > 0.5?true:false;
        }
        let views = ['to park', 'to road', 'to yard'];
        this.view = views[Math.floor(Math.random() * 10 % 3)];
        this.cookerType = Math.random() > 0.5?'gas':'electric';
    }

    render(){
        return <div>

        </div>
    }
}