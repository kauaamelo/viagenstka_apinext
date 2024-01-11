import styles from './card.module.css'

export default async function Card() {

    const cards = await fetch('http://localhost:7096/cliente/listaclientes').then(res => res.json());
    console.log(cards);

    return (
		<div className={styles.container}>
			{cards?.map((card) => (
				<table key={card.id} className={styles.card}>
					<tr> 
                    <th className={styles.card_title}>NOME:</th>
                    <th className={styles.card_title}>CPF:</th>
                    <th className={styles.card_title}>TELEFONE:</th>
                    </tr>

                    <tr> 
                        <td className={styles.card_desc}>{card.nomeCompleto}</td>
                        <td className={styles.card_desc}>{card.cpf}</td>
                        <td className={styles.card_desc}>{card.telefone}</td>
					</tr>
				</table>
			))}
		</div>
	)
}