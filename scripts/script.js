// Beers data array
const beers = [
    {
        label: "L'envolée - Bière Blonde",
        img: "https://www.brasserieducontrevent.com/_img/pages/32_1660223606.jpg",
        description: "Bière Blonde, sur base de malt Pilsen. C'est une bière légère avec une robe jaune paille. Offre un parfait équilibre entre la rondeur du malt et l'amertume conférée par les houblons, ce qui en fait une bière unique et désaltérante.",
        ABV: 5.2,
        IBU: 18,
        EBC: 10,
        availabilities: {
            bottle: ["33cl", "75cl"],
            barrel: ["20L", "30L"]
        }
    },
    {
        label: "L'ondée - Bière Blanche",
        img: "https://www.brasserieducontrevent.com/_img/pages/6_1660223438.jpg",
        description: "Bière de blé et de malt Pilsen, de type Heifenweisen. Robe jaune clair, tirant sur la paille. Bière légèrement épicée et  acidulée, avec une belle tenue de mousse,  dégustée fraîche, elle présente un léger côté malté et une faible amertume.",
        ABV: 5.2,
        IBU: 12,
        EBC: 7,
        availabilities: {
            bottle: ["33cl", "75cl"],
            barrel: ["20L", "30L (sur demande)"]
        }
    },
    {
        label: "La traversée - Bière India Pale Ale",
        img: "https://www.brasserieducontrevent.com/_img/pages/38_1660223734.jpg",
        description: "English Pale ale, robe dorée tirant légèrement sur l’ambre,  sèche et amère.  La forte teneur en houblons lui confère des notes aromatiques d’agrumes et d’épices. Cette IPA satisfera les adeptes du genre, et convaincra les amateurs de nouvelles saveurs.",
        ABV: 5.9,
        IBU: 48,
        EBC: 15,
        availabilities: {
            bottle: ["33cl", "75cl"],
            barrel: ["20L", "30L (sur demande)"]
        }
    },
    {
        label: "La tornade - Bière Triple",
        img: "https://www.brasserieducontrevent.com/_img/pages/39_1660223806.jpg",
        description: "Bière Triple d’inspiration Belge. Elle présente une belle robe ambrée, une mousse épaisse et  une texture légèrement crémeuse. La forte teneur en alcool atténué par la rondeur du malt permet de ressentir les esters d’un côté et des notes florales et épicées de l’autre, ce qui en fait une bière riche et complexe",
        ABV: 8.6,
        IBU: 26,
        EBC: 18.7,
        availabilities: {
            bottle: ["33cl", "75cl"],
            barrel: ["20L", "30L"]
        }
    },
]

// Renderer: simple, template-literal based, runs after DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    const container = document.getElementById('beers-container');
    if (!container) return;

    container.innerHTML = beers.map((beer, index) => `
        <section id="beer-${index + 1}" class="px-8 min-h-screen flex flex-row bg-gray-100 border-y-1">
            <article class="w-1/2 flex flex-col items-center justify-center gap-6">
                <h3 class="text-xl font-bold">${escapeHtml(beer.label)}</h3>
                <ul>
                    <li class="py-4"><p>${escapeHtml(beer.description)}</p></li>
                    <li class="py-4 flex gap-4"><p>Houblons:</p><p>${(beer.hops || []).join(', ')}</p></li>
                    <li class="py-4">
                        <ul>
                            <li class="flex gap-4"><p>ABV:</p><p>${beer.ABV}%</p></li>
                            <li class="flex gap-4"><p>IBU:</p><p>${beer.IBU}</p></li>
                            <li class="flex gap-4"><p>EBC:</p><p>${beer.EBC}</p></li>
                        </ul>
                    </li>
                    <li class="py-4 flex flex-col">
                        <p>Disponible en:</p>
                        <ul class="pl-4">
                            ${(beer.availabilities && (beer.availabilities.bottle || []).concat(beer.availabilities.barrel || [])
                                .map(a => `<li class="flex gap-4"><p>${escapeHtml(a)}</p></li>`).join(''))}
                        </ul>
                    </li>
                </ul>
            </article>
            <aside class="w-1/2 flex flex-col items-center justify-center">
                <img src="${beer.img}" alt="Image de presentation de ${escapeHtml(beer.label)}" aria-hidden="true">
            </aside>
        </section>
    `).join('');
});

// Minimal escape to avoid accidental HTML injection from data
function escapeHtml(str) {
    if (typeof str !== 'string') return str;
    return str.replace(/[&<>"']/g, (c) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
}