import Reveal from "./Reveal";

const tenets = [
  {
    n: "I",
    title: "Ninguém vem te buscar.",
    body: "Não existe currículo, mentor ou algoritmo que entregue o que você não foi atrás. Todo aprendizado que importou na sua vida começou com uma curiosidade mal resolvida — e nenhuma delas tinha prazo de entrega.",
  },
  {
    n: "II",
    title: "Profundidade acima de opinião.",
    body: "É barato ter opinião sobre tudo. É caro entender uma coisa até o fim. Aqui, a segunda vale mais — e a diferença entre as duas aparece em dois minutos de conversa.",
  },
  {
    n: "III",
    title: "Assunto não tem fronteira.",
    body: "Xadrez ensina copy. Filosofia ensina IA. Matemática ensina a mentir menos para si mesmo. Quem estuda em gavetas separadas aprende metade do que poderia.",
  },
  {
    n: "IV",
    title: "Estar errado é barato. Fingir que não está é caro.",
    body: "Aqui você vai ser corrigido, com argumento e sem cerimônia. É o serviço mais valioso que alguém pode te prestar de graça.",
  },
  {
    n: "V",
    title: "Ser o mais burro da sala é privilégio.",
    body: "Se você é o mais inteligente do seu grupo, você não tem grupo — tem plateia. Troque de sala enquanto ainda dá tempo.",
  },
  {
    n: "VI",
    title: "Fora da caixa é onde sobra espaço.",
    body: "Todo mundo disputa o mesmo centímetro do óbvio. A margem inteira está vazia, e é exatamente para lá que a gente olha.",
  },
];

export default function Manifesto() {
  return (
    <section id="manifesto" className="relative mx-auto max-w-6xl scroll-mt-24 px-6 py-32 sm:py-40">
      <div className="grid gap-16 lg:grid-cols-[minmax(0,20rem)_1fr] lg:gap-24">
        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <p className="eyebrow text-gold/60">Manifesto</p>
            <h2 className="font-display mt-5 text-[clamp(2rem,4.4vw,3.2rem)] font-semibold leading-[1.02] tracking-[-0.015em]">
              Seis coisas em que a gente acredita
              <span className="gold-text italic"> de verdade</span>.
            </h2>
            <div className="rule mt-8 w-32" />
            <p className="mt-8 text-[1.02rem] leading-[1.75] text-muted">
              Toda comunidade tem regra. Poucas têm princípio. Estes são os nossos, escritos
              antes do primeiro membro entrar — e mantidos mesmo quando dão trabalho.
            </p>
          </Reveal>
        </div>

        <ol className="space-y-0">
          {tenets.map((t, i) => (
            <Reveal key={t.n} delay={i * 0.05}>
              <li className="group grid grid-cols-[3.2rem_1fr] gap-5 border-t border-line-soft py-9 transition-colors duration-500 hover:border-gold-dim/50 sm:grid-cols-[4.5rem_1fr]">
                <span className="font-display pt-1 text-2xl text-gold-dim transition-colors duration-500 group-hover:text-gold sm:text-3xl">
                  {t.n}
                </span>
                <div>
                  <h3 className="font-display text-[1.4rem] font-semibold leading-snug text-ivory sm:text-[1.65rem]">
                    {t.title}
                  </h3>
                  <p className="mt-3 max-w-xl text-[1.02rem] leading-[1.75] text-muted">
                    {t.body}
                  </p>
                </div>
              </li>
            </Reveal>
          ))}
        </ol>
      </div>
    </section>
  );
}
