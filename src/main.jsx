import {
  ArrowDown,
  ArrowRight,
  ChevronDown,
  CircleCheck,
  Menu,
  X
} from 'lucide-react'
import { useState } from 'react'
import { createRoot } from 'react-dom/client'
import './styles.css'

const findings = [
  { value: '89,5%', label: 'já possuem fibra óptica', tone: 'blue' },
  { value: '100%', label: 'já perderam uma atividade por falha', tone: 'orange' },
  { value: '63,2%', label: 'apontam poucas operadoras', tone: 'navy' },
]

const challenges = [
  ['Poucas opções de operadoras', '63,2%'],
  ['Valor elevado dos planos', '52,6%'],
  ['Conexão lenta', '42,1%'],
  ['Sinal insuficiente nos cômodos', '42,1%'],
]

const recommendations = [
  {
    number: '01',
    title: 'Atrair novas operadoras',
    text: 'Formalizar o contato coletivo com empresas que já atendem regiões vizinhas para solicitar cabeamento e ampliar a concorrência.',
  },
  {
    number: '02',
    title: 'Negociar em conjunto',
    text: 'Mapear planos coletivos com o provedor atual para garantir tarifas melhores por adesão em bloco.',
  },
  {
    number: '03',
    title: 'Melhorar a rede interna',
    text: 'Orientar sobre posicionamento de roteadores, repetidores e redes mesh para levar o sinal a todos os cômodos.',
  },
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeFaq, setActiveFaq] = useState(null)

  const scrollTo = (id) => {
    setMenuOpen(false)
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className="site-shell">
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Conexão que transforma">
          <span className="brand-mark"><span /><span /><span /></span>
          <span>conexão que<br /><b>transforma</b></span>
        </a>
        <nav className={menuOpen ? 'nav-links nav-open' : 'nav-links'}>
          <button type="button" onClick={() => scrollTo('diagnostico')}>O diagnóstico</button>
          <button type="button" onClick={() => scrollTo('impacto')}>Impacto</button>
          <button type="button" onClick={() => scrollTo('caminhos')}>Caminhos</button>
          <button type="button" onClick={() => scrollTo('sobre')}>Sobre o projeto</button>
          <button className="nav-cta" type="button" onClick={() => scrollTo('caminhos')}>Ver resultados <ArrowRight size={15} /></button>
        </nav>
        <button type="button" className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Abrir menu">
          {menuOpen ? <X size={23} /> : <Menu size={23} />}
        </button>
      </header>

      <main id="top">
        <section className="hero section-pad">
          <div className="hero-copy">
            <div className="eyebrow"><span className="eyebrow-line" /> atividade extensionista · uninter</div>
            <h1>Uma conexão melhor <em>muda tudo.</em></h1>
            <p className="hero-lead">Um diagnóstico feito com moradores de Água Quente, no Distrito Federal, para entender como a internet impacta a vida real.</p>
            <div className="hero-actions">
              <button type="button" className="button button-dark" onClick={() => scrollTo('diagnostico')}>Conheça o diagnóstico <ArrowDown size={16} /></button>
              <span className="hero-note">19 moradores ouvidos<br />em um condomínio residencial</span>
            </div>
          </div>
          <div className="hero-visual">
            <div className="orbit orbit-one" />
            <div className="orbit orbit-two" />
            <div className="signal-dot dot-one" /><div className="signal-dot dot-two" /><div className="signal-dot dot-three" />
            <div className="hero-orb"><span className="orb-inner" /></div>
            <div className="visual-label label-top">conectar <span>→</span></div>
            <div className="visual-label label-bottom">escutar <span>→</span></div>
          </div>
        </section>

        <section className="ticker" aria-label="Resumo do diagnóstico">
          <div className="ticker-inner"><span>DIAGNÓSTICO DE CONECTIVIDADE</span><i>✦</i><span>ÁGUA QUENTE · DF</span><i>✦</i><span>19 RESPOSTAS COLETADAS</span><i>✦</i><span>INCLUSÃO DIGITAL</span></div>
        </section>

        <section className="intro section-pad" id="diagnostico">
          <div className="section-kicker">01 <span>O diagnóstico</span></div>
          <div className="intro-grid">
            <h2>A internet está presente.<br /><em>Mas ainda não chega<br />do mesmo jeito para todos.</em></h2>
            <div className="intro-body"><p>Em Água Quente, quase todas as casas estão conectadas por fibra óptica. Ainda assim, a experiência de estar online é marcada por poucas opções de operadoras, preços altos e interrupções que atravessam o cotidiano.</p><p>Este levantamento escuta quem vive essa realidade para transformar percepção em evidência — e evidência em próximos passos.</p><button type='button' className="text-link" onClick={() => scrollTo('metodo')}>Como chegamos aqui <ArrowRight size={16} /></button></div>
          </div>
        </section>

        <section className="findings section-pad" id="impacto">
          <div className="section-kicker light">02 <span>O que encontramos</span></div>
          <div className="findings-heading"><h2>Três números.<br /><em>Uma realidade complexa.</em></h2><p>Os dados mostram que acesso não é o mesmo que qualidade. E qualidade não é o mesmo que liberdade.</p></div>
          <div className="finding-grid">{findings.map((item) => <article className={`finding-card ${item.tone}`} key={item.value}><div className="finding-number">{item.value}</div><p>{item.label}</p><span className="card-arrow">↗</span></article>)}</div>
        </section>

        <section className="story section-pad" id="metodo">
          <div className="story-aside"><div className="section-kicker">03 <span>Por trás dos dados</span></div></div>
          <div className="story-content"><h2>Quando a conexão falha,<br /><em>a rotina sente.</em></h2><p className="story-intro">Os problemas não ficam no roteador. Eles chegam à mesa de jantar, à sala de aula, ao trabalho e à conversa com quem está longe.</p><div className="challenge-list">{challenges.map(([label, percentage], index) => <div className="challenge" key={label}><span className="challenge-index">0{index + 1}</span><span className="challenge-label">{label}</span><span className="challenge-bar"><i style={{ width: percentage }} /></span><strong>{percentage}</strong></div>)}</div><div className="pull-quote"><span>“</span><p>Todos os 19 moradores já deixaram de realizar alguma atividade digital por problemas de internet.</p></div></div>
        </section>

        <section className="pathways section-pad" id="caminhos">
          <div className="section-kicker">04 <span>O que pode mudar</span></div>
          <div className="pathways-heading"><h2>Diagnosticar é<br /><em>abrir caminhos.</em></h2><p>As soluções não precisam começar grandes. Precisam começar juntas.</p></div>
          <div className="recommendation-grid">{recommendations.map((item) => <article className="recommendation" key={item.number}><span className="recommendation-number">{item.number}</span><h3>{item.title}</h3><p>{item.text}</p><div className="rec-check"><CircleCheck size={18} /> próximo passo possível</div></article>)}</div>
        </section>

        <section className="manifesto section-pad"><div className="manifesto-mark">✦</div><p>Conexão não é luxo.<br /><em>É ponto de partida.</em></p><button type="button" className="button button-light" onClick={() => scrollTo('sobre')}>Conheça o projeto <ArrowRight size={16} /></button></section>

        <section className="about section-pad" id="sobre">
          <div className="section-kicker">05 <span>Sobre o projeto</span></div><div className="about-grid"><div><h2>Escutar para<br /><em>transformar.</em></h2></div><div><p>Este diagnóstico foi desenvolvido como parte de um projeto de extensão universitária, em parceria com a comunidade de Água Quente, no Distrito Federal.</p><p>O objetivo é aproximar conhecimento e território, usando a pesquisa como ferramenta para revelar necessidades concretas e construir respostas coletivas.</p><div className="about-meta"><span><b>19</b> moradores</span><span><b>01</b> comunidade</span><span><b>03</b> ODS relacionados</span></div></div></div>
          <div className="faq"><div className="faq-title">Perguntas sobre o diagnóstico</div>{['Onde a pesquisa foi realizada?', 'Quem participou do levantamento?', 'Quais são os próximos passos?'].map((question, index) => <button type="button" className="faq-row" key={question} onClick={() => setActiveFaq(activeFaq === index ? null : index)}><span>{question}</span><ChevronDown className={activeFaq === index ? 'rotate' : ''} size={18} />{activeFaq === index && <small>{index === 0 ? 'Em um condomínio residencial localizado na Região Administrativa de Água Quente, no Distrito Federal.' : index === 1 ? '19 moradores responderam ao questionário de diagnóstico de conectividade.' : 'Compartilhar os resultados, atrair novas operadoras e avaliar negociações coletivas para a comunidade.'}</small>}</button>)}</div>
        </section>
      </main>

      <footer className="footer section-pad"><a className="brand footer-brand" href="#top"><span className="brand-mark"><span /><span /><span /></span><span>conexão que<br /><b>transforma</b></span></a><p>Um diagnóstico de conectividade comunitária<br />Água Quente · Distrito Federal</p><div className="footer-end"><span>atividade extensionista</span><span>© 2026</span></div></footer>
    </div>
  )
}

export default App

createRoot(document.getElementById('root')).render(<App />)
