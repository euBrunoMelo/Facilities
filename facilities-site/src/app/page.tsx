import Image from "next/image";

const trustHighlights = [
  {
    title: "Equipe Qualificada",
    description:
      "Técnicos certificados e supervisionados por engenheiros para cada disciplina.",
  },
  {
    title: "Garantia em Cada Serviço",
    description:
      "Laudos e registros fotográficos asseguram a qualidade do início ao fim.",
  },
  {
    title: "Orçamento Transparente",
    description:
      "Diagnóstico rápido, custos detalhados e cronograma alinhado antes da execução.",
  },
];

const serviceCategories = [
  {
    title: "Manutenção Residencial",
    items: [
      "Elétrica e hidráulica completa",
      "Pequenos reparos e marcenaria",
      "Pintura e renovação de ambientes",
    ],
  },
  {
    title: "Reformas e Construção",
    items: [
      "Cozinhas e banheiros sob medida",
      "Pisos, revestimentos e alvenaria",
      "Projetos estruturais com acompanhamento",
    ],
  },
  {
    title: "Serviços Comerciais",
    items: [
      "Contratos de facilities",
      "Manutenção preventiva e corretiva",
      "Adequação de lojas e escritórios",
    ],
  },
];

const testimonials = [
  {
    quote:
      "Nossa casa ganhou nova vida. A equipe chegou no horário, manteve tudo limpo e terminou antes do previsto.",
    name: "Carla Menezes",
    role: "Proprietária residencial",
  },
  {
    quote:
      "Como síndico, preciso de respostas rápidas. Eles cuidam da manutenção preventiva sem atrapalhar os moradores.",
    name: "Renato Lima",
    role: "Síndico de condomínio",
  },
  {
    quote:
      "Gerenciar facilities é desafiador, mas com a Facilities ganhei um parceiro pontual e confiável para cada loja.",
    name: "Luciana Souza",
    role: "Gerente de operações comerciais",
  },
];

const CTA_LABEL = "Solicitar Orçamento Gratuito";

const mediaItems = [
  {
    type: "image",
    src: "/sala/forro_sala1.jpg",
    alt: "Detalhe do forro finalizado na sala",
  },
  {
    type: "image",
    src: "/sala/forro_sala2.jpg",
    alt: "Execução do forro em andamento",
  },
  {
    type: "video",
    src: "/sala/video_final.mp4",
    poster: "/sala/forro_sala1.jpg",
    alt: "Vídeo apresentando o resultado final da sala",
  },
] as const;

export default function Home() {
  return (
    <div className="bg-[#F4F6F8] text-[#333333]">
      <main className="flex min-h-screen flex-col gap-12 pb-20">
        <header className="section pb-0 pt-8">
          <div className="container">
            <div className="rounded-3xl bg-[#0A2A4E] p-10 text-white shadow-2xl">
              <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex items-center gap-4">
                  <Image
                    src="/logo.jpg"
                    alt="Logotipo Facilities"
                    width={68}
                    height={68}
                    className="rounded-full border border-white/30 bg-white/10 p-1"
                    priority
                  />
                  <div>
                    <p className="text-sm uppercase tracking-[0.3em] text-white/70">
                      Facilities
                    </p>
                    <p className="text-lg font-semibold">
                      Construção e Manutenção Completa
                    </p>
                  </div>
                </div>
                <a
                  href="https://wa.me/5562994149502?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20gratuito."
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center rounded-full bg-[#F9A825] px-6 py-3 text-sm font-semibold uppercase tracking-wide text-[#0A2A4E] transition hover:bg-[#ffb733]"
                >
                  {CTA_LABEL}
                </a>
              </div>
              <div className="mt-10 grid gap-10 lg:grid-cols-[1.6fr,1fr] lg:items-center">
                <div className="space-y-6">
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                    Construção • Manutenção • Facilities
                  </p>
                  <h1 className="text-4xl font-semibold leading-tight md:text-5xl">
                    Seu imóvel precisa de reparos? Da construção à manutenção,
                    nós resolvemos.
                  </h1>
                  <p className="text-lg text-white/80">
                    Serviços completos de elétrica, hidráulica, pintura e
                    reformas para casas, apartamentos e empresas — com agilidade,
                    acompanhamento técnico e garantia total.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a
                      href="https://wa.me/5562994149502?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20gratuito."
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center justify-center rounded-full bg-[#F9A825] px-6 py-3 text-base font-semibold text-[#0A2A4E] transition hover:bg-[#ffb733]"
                    >
                      {CTA_LABEL}
                    </a>
                    <a
                      href="#servicos"
                      className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-base font-semibold text-white transition hover:bg-white/10"
                    >
                      Conheça Nossas Soluções
                    </a>
                  </div>
                </div>
                <div className="rounded-2xl bg-white/10 p-6 backdrop-blur">
                  <p className="text-sm font-semibold uppercase text-white/70">
                    Resultado para você
                  </p>
                  <ul className="mt-4 space-y-4 text-base">
                    <li className="flex items-start gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-[#F9A825]" />
                      Tranquilidade para proprietários, síndicos e gestores com
                      uma única equipe responsável por tudo.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-[#F9A825]" />
                      Valorização imediata do imóvel com acabamentos impecáveis
                      e limpeza total após o serviço.
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="mt-1 block h-2 w-2 rounded-full bg-[#F9A825]" />
                      Agilidade com cronogramas claros, comunicação contínua e
                      garantia documentada.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </header>

        <section className="section pt-0">
          <div className="container space-y-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#0A2A4E]/80">
                Antes e Depois em destaque
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0A2A4E]">
                Veja como transformamos ambientes com acabamento preciso
              </h2>
              <p className="mt-4 text-lg text-[#333333]/80">
                Resultado real de um projeto recente: planejamento, execução do
                forro e finalização com limpeza completa. A mesma equipe que
                lidera este processo pode estar no seu imóvel.
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                {mediaItems.slice(0, 2).map((item) => (
                  <figure
                    key={item.src}
                    className="overflow-hidden rounded-2xl bg-white shadow-lg"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      width={760}
                      height={540}
                      className="h-full w-full object-cover"
                    />
                  </figure>
                ))}
              </div>
              <figure className="overflow-hidden rounded-2xl bg-white shadow-lg">
                <video
                  controls
                  poster={mediaItems[0].src}
                  className="h-full w-full object-cover"
                >
                  <source src={mediaItems[2].src} type="video/mp4" />
                  Seu navegador não suporta o elemento de vídeo.
                </video>
              </figure>
            </div>
          </div>
        </section>

        <section id="servicos" className="section">
          <div className="container space-y-8">
            <div className="max-w-2xl">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#0A2A4E]/80">
                Nossos serviços
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0A2A4E]">
                Soluções completas para seu imóvel
              </h2>
              <p className="mt-4 text-lg text-[#333333]/80">
                Atuamos do reparo emergencial às grandes reformas, integrando
                engenharia, mão de obra especializada e gestão de facilities em
                um único contrato.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {serviceCategories.map((category) => (
                <div
                  key={category.title}
                  className="flex flex-col gap-4 rounded-2xl bg-white p-6 shadow-lg"
                >
                  <h3 className="text-xl font-semibold text-[#0A2A4E]">
                    {category.title}
                  </h3>
                  <ul className="space-y-3 text-base text-[#333333]/80">
                    {category.items.map((item) => (
                      <li key={item} className="flex items-start gap-3">
                        <span className="mt-2 block h-2 w-2 rounded-full bg-[#F9A825]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container rounded-3xl bg-white p-10 shadow-xl">
            <div className="grid gap-10 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#0A2A4E]/80">
                  Diferenciais
                </p>
                <h2 className="mt-3 text-3xl font-semibold text-[#0A2A4E]">
                  Tranquilidade do início ao fim do projeto
                </h2>
                <p className="mt-4 text-lg text-[#333333]/80">
                  Cada etapa é planejada para reduzir ruído, evitar retrabalhos
                  e manter você informado. Transparência total para proprietários,
                  síndicos e gestores de facilities.
                </p>
              </div>
              <div className="space-y-6">
                {trustHighlights.map((item) => (
                  <div key={item.title} className="rounded-2xl bg-[#F4F6F8] p-5">
                    <p className="text-lg font-semibold text-[#0A2A4E]">
                      {item.title}
                    </p>
                    <p className="mt-2 text-[#333333]/80">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container space-y-8">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.4em] text-[#0A2A4E]/80">
                Prova social
              </p>
              <h2 className="mt-3 text-3xl font-semibold text-[#0A2A4E]">
                Clientes que já contam com a nossa equipe
              </h2>
              <p className="mt-4 text-lg text-[#333333]/80">
                Pontualidade, limpeza e qualidade em cada entrega — seja em um
                apartamento ou em toda a operação comercial.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-2xl bg-white p-6 text-left shadow-lg"
                >
                  <blockquote className="text-base italic text-[#333333]/90">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-4 text-sm font-semibold text-[#0A2A4E]">
                    {item.name}
                    <span className="block text-xs font-normal text-[#333333]/70">
                      {item.role}
                    </span>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        <section id="contato" className="section pt-0">
          <div className="container">
            <div className="rounded-3xl bg-[#0A2A4E] p-10 text-white shadow-2xl">
              <div className="grid gap-8 lg:grid-cols-[2fr,1fr] lg:items-center">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.4em] text-white/70">
                    Última chamada
                  </p>
                  <h2 className="mt-3 text-3xl font-semibold">
                    Não deixe um pequeno problema virar uma grande dor de
                    cabeça.
                  </h2>
                  <p className="mt-4 text-lg text-white/80">
                    Fale com nossos especialistas hoje mesmo e receba um
                    orçamento gratuito com cronograma de execução em até 24h
                    úteis.
                  </p>
                </div>
                <div className="flex flex-col gap-4 rounded-2xl bg-white/10 p-6 text-center">
                  <p className="text-sm uppercase tracking-[0.3em] text-white/80">
                    Pronto para começar?
                  </p>
                  <a
                    href="https://wa.me/5562994149502?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20gratuito."
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-full bg-[#F9A825] px-6 py-3 text-base font-semibold text-[#0A2A4E] transition hover:bg-[#ffb733]"
                  >
                    {CTA_LABEL}
                  </a>
                  <p className="text-xs text-white/70">
                    Preferimos atendimento consultivo. Envie seu desafio e
                    retornamos com a melhor solução.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
