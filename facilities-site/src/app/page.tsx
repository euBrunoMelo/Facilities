import Image from "next/image";
import type { SVGProps } from "react";

const HomeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M3 10.5 12 4l9 6.5" />
    <path d="M5 9.5V20h14V9.5" />
    <path d="M9 20v-6h6v6" />
  </svg>
);

const GearIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a7.97 7.97 0 0 0 .1-2 7.97 7.97 0 0 0-.1-2l2.1-1.6-2-3.4-2.5 1a8 8 0 0 0-3.5-2l-.4-2.7h-4l-.4 2.7a8 8 0 0 0-3.5 2l-2.5-1-2 3.4L4.6 11a7.97 7.97 0 0 0-.1 2 7.97 7.97 0 0 0 .1 2L2.5 16.6l2 3.4 2.5-1a8 8 0 0 0 3.5 2l.4 2.7h4l.4-2.7a8 8 0 0 0 3.5-2l2.5 1 2-3.4Z" />
  </svg>
);

const BuildingIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 20V4h6v16" />
    <path d="M11 6h8v14" />
    <path d="M3 20h18" />
    <path d="M8 8v2" />
    <path d="M8 12v2" />
    <path d="M8 16v2" />
    <path d="M15 8v2" />
    <path d="M15 12v2" />
    <path d="M15 16v2" />
  </svg>
);

const CheckIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth={1.5}
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M5 13 9 17 19 7" />
  </svg>
);

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

const serviceCards = [
  {
    title: "Residenciais sob medida",
    description:
      "Tudo começa com uma ideia. Talvez você queira transformar um ambiente residencial completo em algo novo.",
    icon: HomeIcon,
  },
  {
    title: "Reformas estruturais",
    description:
      "Talvez você esteja pronto para ampliar um negócio. Nós conduzimos obras integrais com cronograma seguro.",
    icon: GearIcon,
  },
  {
    title: "Projetos corporativos",
    description:
      "Ou talvez precise preparar lojas e escritórios para funcionar sem interrupções. Fazemos isso do piso ao forro.",
    icon: BuildingIcon,
  },
  {
    title: "Facilities contínuo",
    description:
      "Para quem busca manutenção preventiva e corretiva em ciclos, cuidamos de cada detalhe com equipe fixa.",
    icon: CheckIcon,
  },
] as const;

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
      "Gerenciar é desafiador, mas com a Facilities ganhei um parceiro pontual e confiável para cada loja.",
    name: "Luciana Souza",
    role: "Gerente de operações comerciais",
  },
];

const CTA_LABEL = "Solicitar Orçamento Gratuito";
const WHATSAPP_LINK =
  "https://wa.me/5562994149502?text=Ol%C3%A1%2C%20quero%20solicitar%20um%20or%C3%A7amento%20gratuito.";

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
    <div className="bg-[#F5F5F0] text-[#1A1A1A]">
      <main className="flex min-h-screen flex-col gap-12 pb-20">
        <header className="section pb-0">
          <div className="container">
            <div className="rounded-[48px] bg-[#8B9A8C] px-8 py-16 text-center text-white shadow-2xl sm:px-12 lg:px-20">
              <h1 className="mt-6 text-4xl font-semibold leading-tight tracking-[-0.02em] text-white sm:text-5xl lg:text-6xl">
                Acabamento impecável e obras completas para valorizar seu imóvel
              </h1>
              <p className="mt-6 text-lg text-white/80">
                Tudo começa com uma ideia. Talvez você queira transformar um
                apartamento, erguer um novo espaço comercial ou manter a operação
                funcionando sem interrupção. Nós lideramos cada etapa com
                fiscalização técnica e garantia total.
              </p>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6">
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noreferrer"
                  className="pill-button bg-white text-[#1A1A1A] hover:bg-[#e4e4dc]"
                >
                  {CTA_LABEL}
                </a>
                <a
                  href="#servicos"
                  className="pill-button border border-white/50 text-white hover:bg-white/10"
                >
                  Conheça nossas frentes
                </a>
              </div>
              <div className="mt-12 grid gap-6 sm:grid-cols-3">
                {trustHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-3xl bg-white/10 px-6 py-5 text-left text-sm text-white/90"
                  >
                    <p className="text-base font-semibold text-white">
                      {item.title}
                    </p>
                    <p className="mt-2 text-white/80">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </header>

        <section className="section pt-0">
          <div className="container space-y-6">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#8B9A8C]">
                Antes e depois em destaque
              </p>
              <h2 className="mt-3 text-4xl font-semibold text-[#1A1A1A]">
                Veja como transformamos ambientes com acabamento preciso
              </h2>
              <p className="mt-4 text-lg text-[#444444]">
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
          <div className="container space-y-10">
            <div className="max-w-3xl">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#8B9A8C]">
                Nossos serviços
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em] text-[#1A1A1A]">
                Construtores de confiança para cada fase da obra
              </h2>
              <p className="mt-4 text-lg text-[#444444]">
                Tudo começa com uma ideia. Talvez você queira abrir um negócio.
                Talvez você queira transformar um passatempo em algo mais sério.
                Ou talvez você tenha um projeto criativo para compartilhar com o
                mundo. A Oranssi executa com planejamento, segurança e
                comunicação constante.
              </p>
            </div>
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {serviceCards.map((card) => {
                const Icon = card.icon;
                return (
                  <article
                    key={card.title}
                    className="flex h-full flex-col gap-4 rounded-[32px] bg-white px-6 py-8 shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
                  >
                    <div className="flex h-14 w-14 items-center justify-center rounded-full border border-[#8B9A8C]/40 text-[#8B9A8C]">
                      <Icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-2xl font-semibold tracking-[-0.02em] text-[#1A1A1A]">
                      {card.title}
                    </h3>
                    <p className="text-base leading-relaxed text-[#555555]">
                      {card.description}
                    </p>
                    <a
                      href={WHATSAPP_LINK}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-auto text-sm font-semibold uppercase tracking-[0.3em] text-[#8B9A8C] underline-offset-4 transition hover:text-[#6f7b70]"
                    >
                      ENTRE EM CONTATO
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container rounded-[40px] bg-white p-12 shadow-xl">
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.5em] text-[#8B9A8C]">
                  Diferenciais
                </p>
                <h2 className="mt-4 text-4xl font-semibold text-[#1A1A1A]">
                  Tranquilidade do início ao fim do projeto
                </h2>
                <p className="mt-4 text-lg text-[#444444]">
                  Cada etapa é planejada para reduzir ruído, evitar retrabalhos e
                  manter você informado. Transparência total para proprietários,
                  síndicos e gestores de facilities.
                </p>
              </div>
              <div className="grid gap-6 sm:grid-cols-2">
                {trustHighlights.map((item) => (
                  <div
                    key={item.title}
                    className="rounded-[28px] bg-[#F5F5F0] p-6 transition hover:-translate-y-1 hover:shadow-lg"
                  >
                    <p className="text-lg font-semibold text-[#1A1A1A]">
                      {item.title}
                    </p>
                    <p className="mt-3 text-[#555555]">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container rounded-[40px] bg-[#8B9A8C] px-8 py-16 text-white shadow-2xl">
            <div className="mx-auto max-w-3xl text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/70">
                O que dizem nossos clientes
              </p>
              <h2 className="mt-4 text-4xl font-semibold tracking-[-0.02em]">
                Experiência sem dor de cabeça, do briefing à entrega
              </h2>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((item) => (
                <figure
                  key={item.name}
                  className="rounded-3xl bg-white/10 p-8 text-left shadow-lg backdrop-blur"
                >
                  <blockquote className="text-lg leading-relaxed text-white">
                    “{item.quote}”
                  </blockquote>
                  <figcaption className="mt-6 text-sm font-semibold uppercase tracking-[0.3em] text-white/80">
                    {item.name}
                    <span className="mt-1 block text-xs font-normal tracking-normal text-white/70">
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
            <div className="grid overflow-hidden rounded-[40px] bg-[#1A1A1A] text-white shadow-2xl lg:grid-cols-5">
              <div className="relative h-full min-h-[320px] lg:col-span-2">
                <Image
                  src="/sala/forro_sala2.jpg"
                  alt="Detalhe de projeto executado"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
              <div className="space-y-6 px-8 py-12 lg:col-span-3 lg:px-12">
                <p className="text-sm font-semibold uppercase tracking-[0.5em] text-white/60">
                  Pronto para criar sua visão?
                </p>
                <h2 className="text-4xl font-semibold tracking-[-0.02em]">
                  Conversamos sobre briefing, cronograma e investimento em uma
                  única chamada.
                </h2>
                <p className="text-lg text-white/80">
                  Tudo começa com uma ideia. Talvez você queira abrir um negócio,
                  talvez queira transformar um passatempo em algo mais sério. Envie
                  seu desafio e devolvemos um plano com 100% de transparência.
                </p>
                <div>
                  <a
                    href={WHATSAPP_LINK}
                    target="_blank"
                    rel="noreferrer"
                    className="pill-button bg-white text-[#1A1A1A] hover:bg-[#f0f0f0]"
                  >
                    {CTA_LABEL}
                  </a>
                </div>
                <p className="text-sm uppercase tracking-[0.3em] text-white/60">
                  Atendimento consultivo • Retorno em até 24h úteis
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
