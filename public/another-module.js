export class HobbitSettlement {
	constructor(name, founding, founders) {
		this.name = name;
		this.founding = founding;
		this.founders = founders;
	}
}

export const theShire = new HobbitSettlement('The Shire', 1601, ['Marcho', 'Blanco']);
export const buckland = new HobbitSettlement('Buckland', 2340, 'Gorhendad Oldbuck');
export const bree = new HobbitSettlement('Bree', 473, 'Atanatári who did not reach Beleriand');