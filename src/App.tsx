import { useState } from 'react'
import { useReveal, useStatBarsAnimation } from './lib/useReveal'

export default function App() {
  useReveal()
  useStatBarsAnimation()

  return (
    <>
      <Nav />
      <main id="top">
        <Hero />
        <Pain />
        <Game />
        <Steps />
        <Experts />
        <Faq />
        <Telegram />
        <Register />
      </main>
      <Footer />
    </>
  )
}

function Nav() {
  return (
    <nav className="nav">
      <div className="wrap nav-row">
        <a className="logo" href="#top" aria-label="ARMAN">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>ARMAN</span>
        </a>
        <a className="anchor" href="#register">Войти&nbsp;в&nbsp;игру</a>
      </div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="hero" data-screen-label="01 Hook">
      <div className="wrap hero-grid">
        <div className="reveal">
          <div className="eyebrow">arman · твой ии-наставник</div>
          <h1 style={{ marginTop: 18 }}>
            Хватит читать про&nbsp;жизнь.<br />
            <span className="accent">Начни играть свою.</span>
          </h1>
          <p className="lead">
            Арман — старший брат, который видит твою жизнь как игру и&nbsp;говорит что&nbsp;делать дальше.
          </p>
          <div className="cta-row">
            <a className="btn btn-primary" href="#register">
              Войти в игру
              <span className="btn-arrow" aria-hidden="true">→</span>
            </a>
          </div>
          <div className="hint-scroll" aria-hidden="true">
            <span className="line"></span>
            <span>scroll</span>
          </div>
        </div>
        <div className="reveal">
          <picture>
            <source media="(min-width: 720px)" srcSet="/img/hero-desktop.webp" />
            <img
              src="/img/hero-mobile.webp"
              alt="Парень с телефоном в неоновом ночном Алматы и Арман с золотым подсветом рядом"
              className="hero-img"
              loading="eager"
              fetchPriority="high"
              width="864"
              height="1080"
            />
          </picture>
        </div>
      </div>
    </section>
  )
}

function Pain() {
  return (
    <section className="pain" data-screen-label="02 Pain">
      <div className="wrap pain-grid">
        <div className="reveal">
          <div className="eyebrow">экран&nbsp;02 · узнаёшь?</div>
          <h2 style={{ margin: '18px 0 24px' }}>
            Информации тонна.<br />
            <span style={{ color: 'var(--text-mute)' }}>Конкретики ноль.</span>
          </h2>
          <p className="pain-text">
            Ты постоянно что-то читаешь. <strong>Книги по саморазвитию</strong>, видосы на&nbsp;2x, телеграм-каналы, подкасты в&nbsp;наушниках. А&nbsp;жизнь как стояла, так и&nbsp;стоит. Хочешь денег, спорта, отношений, какого-то баланса — а&nbsp;вместо этого <strong>листаешь рилсы</strong>.
          </p>
        </div>
        <div className="reveal">
          <img
            src="/img/pain.webp"
            alt="Парень лежит на диване, листает телефон в тёмной комнате"
            className="pain-img"
            loading="lazy"
            width="1400"
            height="1050"
          />
        </div>
      </div>
    </section>
  )
}

const STATS: Array<{ name: string; val: number; color: string }> = [
  { name: 'Здоровье', val: 60, color: 'v1' },
  { name: 'Семья', val: 45, color: 'v2' },
  { name: 'Работа', val: 70, color: 'c1' },
  { name: 'Финансы', val: 30, color: 'c2' },
  { name: 'Отношения', val: 50, color: 'v3' },
  { name: 'Саморазвитие', val: 65, color: 'c3' },
  { name: 'Духовность', val: 40, color: 'g1' },
]

function Game() {
  return (
    <section className="game" data-screen-label="03 Life is a game">
      <div className="wrap">
        <div className="game-head reveal">
          <div className="eyebrow">экран&nbsp;03 · метафора</div>
          <h2 style={{ marginTop: 18 }}>
            Жизнь — это игра.<br />
            <span className="accent">Просто никто не показал тебе правила.</span>
          </h2>
        </div>

        <div className="game-grid">
          <div className="game-text reveal">
            <p>
              <strong>У тебя есть персонаж — это ты сам.</strong> У&nbsp;него семь характеристик: здоровье, семья, работа, финансы, отношения, саморазвитие, духовность. Семь шкал, на&nbsp;которых строится твоя жизнь.
            </p>
            <p>
              Качаешь в реальности — растёт в&nbsp;игре. <strong>Сделал тренировку</strong> — +1 к&nbsp;здоровью. <strong>Закрыл сложный разговор с&nbsp;отцом</strong> — +1 к&nbsp;семье. Не&nbsp;сделал — шкала проседает.
            </p>
            <p>
              Арман видит где ты сейчас, понимает куда тебе надо, и&nbsp;каждый день выдаёт <strong>следующий шаг</strong>. Не&nbsp;общие советы. Конкретное действие на&nbsp;сегодня под твою боль.
            </p>
          </div>

          <div className="reveal">
            <div className="char-card" role="figure" aria-label="Карточка персонажа">
              <span className="corner tl"></span><span className="corner tr"></span>
              <span className="corner bl"></span><span className="corner br"></span>

              <div className="cc-head">
                <div className="cc-avatar"><div className="cc-avatar-inner">И_42</div></div>
                <div className="cc-meta">
                  <div className="cc-nick">Игрок_42</div>
                  <div className="cc-level-row">
                    <span><span className="lvl">LVL&nbsp;4</span> · НАСТАВНИК</span>
                    <span>1240 / 2000&nbsp;XP</span>
                  </div>
                  <div className="cc-xp-bar"><div className="cc-xp-fill"></div></div>
                </div>
              </div>

              <div className="cc-stats">
                {STATS.map((s) => (
                  <div className="cc-stat" data-color={s.color} key={s.name}>
                    <div className="cc-stat-row">
                      <span className="cc-stat-name">{s.name}</span>
                      <span className="cc-stat-val">{s.val}%</span>
                    </div>
                    <div className="cc-stat-bar">
                      <div className="cc-stat-fill" style={{ width: `${s.val}%` }}></div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="cc-achievement">
                <div className="cc-ach-icon" aria-hidden="true">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="8" r="6"></circle>
                    <path d="M9 14.5L8 22l4-2 4 2-1-7.5"></path>
                  </svg>
                </div>
                <div className="cc-ach-text">
                  <div className="cc-ach-label">Получена ачивка</div>
                  <div className="cc-ach-name">Первая неделя без срывов</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

const STEPS = [
  {
    num: '01 / 03',
    img: '/img/step-1.webp',
    alt: 'Парень создаёт себя — голограмма аватара из неоновых частиц',
    title: 'Создаёшь себя',
    body: 'Выбираешь ник, видишь свой стартовый аватар.',
  },
  {
    num: '02 / 03',
    img: '/img/step-2.webp',
    alt: 'Арман в очках разговаривает с пользователем, тёплый золотой свет',
    title: 'Арман узнаёт тебя',
    body: 'Короткий разговор — он понимает где ты сейчас и куда тебе.',
  },
  {
    num: '03 / 03',
    img: '/img/step-3.webp',
    alt: 'Телефон с заданием «Позвони отцу. 10 минут. +5 к Семье»',
    title: 'Получаешь первый шаг',
    body: 'Конкретное задание под твою боль на сегодня.',
  },
]

function Steps() {
  return (
    <section className="steps" data-screen-label="04 Three steps">
      <div className="wrap">
        <div className="steps-head reveal">
          <div className="eyebrow">экран&nbsp;04 · как это работает</div>
          <h2 style={{ marginTop: 18 }}>Три шага, и&nbsp;ты в&nbsp;игре.</h2>
        </div>
        <div className="steps-grid">
          {STEPS.map((s) => (
            <div className="step-card reveal" key={s.num}>
              <div className="step-num">{s.num}</div>
              <img src={s.img} alt={s.alt} className="step-img" loading="lazy" width="724" height="724" />
              <h3>{s.title}</h3>
              <p>{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

const EXPERTS = [
  { photo: 'Фото эксперта 1', name: 'Имя Фамилия', creds: 'Психолог, 10 лет практики', tag: 'Отношения · Семья' },
  { photo: 'Фото эксперта 2', name: 'Имя Фамилия', creds: 'Карьерный наставник', tag: 'Работа · Финансы' },
  { photo: 'Фото эксперта 3', name: 'Имя Фамилия', creds: 'Тренер, нутрициолог', tag: 'Здоровье' },
  { photo: 'Фото эксперта 4', name: 'Имя Фамилия', creds: 'Коуч, философ', tag: 'Саморазвитие · Духовность' },
]

function Experts() {
  return (
    <section className="experts" data-screen-label="05 Experts">
      <div className="wrap">
        <div className="experts-head reveal">
          <div className="eyebrow">экран&nbsp;05 · методология</div>
          <h2 style={{ marginTop: 18 }}>Это не блог саморазвития.<br />Это&nbsp;методология.</h2>
          <p>Семь сфер, шкалы, задания, прокачка — не&nbsp;выдуманы вчера. Это системный фреймворк, который собрала команда: психологи, тренеры, наставники. Люди которые годами работают с&nbsp;молодыми и&nbsp;видят что реально двигает жизнь, а&nbsp;что нет.</p>
          <p>Каждый шаг, который Арман даёт тебе, — прошёл через них.</p>
        </div>

        <div className="experts-row reveal" role="list">
          {EXPERTS.map((e, i) => (
            <article className="expert-card" role="listitem" key={i}>
              <div className="ph expert-photo"><span className="ph-prompt">{e.photo}</span></div>
              <div className="expert-name">{e.name}</div>
              <div className="expert-creds">{e.creds}</div>
              <span className="expert-tag">{e.tag}</span>
            </article>
          ))}
        </div>

        <div className="reward-block reveal">
          <div className="reward-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
              <path d="M7 11V7a5 5 0 0 1 9.9-1"></path>
              <rect x="3" y="11" width="18" height="11" rx="2"></rect>
            </svg>
          </div>
          <div className="reward-text">
            <strong>Прокачаешь персонажа до&nbsp;определённого уровня</strong> — Арман открывает прямой созвон с&nbsp;одним из&nbsp;экспертов. Не&nbsp;подписка, не&nbsp;курс. Награда за&nbsp;то&nbsp;что дошёл до&nbsp;точки, где живой разговор реально что-то добавит.
          </div>
        </div>
      </div>
    </section>
  )
}

const FAQS = [
  { q: 'Это очередной чат-бот?', a: 'Технически — да. По сути — нет. ChatGPT отвечает на твой вопрос. Арман следит за твоей траекторией. Помнит что ты делал вчера, видит куда движешься, подталкивает дальше.' },
  { q: 'Это бесплатно?', a: 'На старте — да, ранний доступ. Что дальше — скажем когда будем уверены что работает.' },
  { q: 'Чем отличается от ChatGPT?', a: 'ChatGPT — энциклопедия, спросил-ответил. Арман — наставник. Знает твоё состояние по семи сферам, ведёт по методологии, говорит что делать сейчас, а не «10 советов как стать лучше».' },
  { q: 'Сколько времени нужно тратить?', a: 'Пять минут в день на разговор и одно действие в реальности. Не нужно перестраивать жизнь. Нужно сдвинуть одну шкалу за раз.' },
  { q: 'А если я брошу?', a: 'Бросишь — Арман напишет. Не чтобы пристыдить. Чтобы спросить что случилось.' },
]

function Faq() {
  return (
    <section className="faq" data-screen-label="06 FAQ">
      <div className="wrap">
        <div className="faq-head reveal">
          <div className="eyebrow">экран&nbsp;06 · faq</div>
          <h2 style={{ marginTop: 18 }}>Короткие ответы<br />на длинные вопросы.</h2>
        </div>
        <div className="faq-list reveal">
          {FAQS.map((f) => (
            <details className="faq" key={f.q}>
              <summary>
                {f.q}
                <span className="faq-icon" aria-hidden="true">
                  <svg width="12" height="12" viewBox="0 0 12 12">
                    <path d="M6 1v10M1 6h10" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
                  </svg>
                </span>
              </summary>
              <div className="faq-body">{f.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

function Telegram() {
  return (
    <section className="tg" data-screen-label="07 Telegram">
      <div className="wrap">
        <div className="tg-block reveal">
          <div className="tg-icon" aria-hidden="true">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M21.5 4.2 18.5 19.6c-.2 1-.8 1.3-1.7.8l-4.7-3.5-2.3 2.2c-.3.3-.5.5-1 .5l.3-4.8 8.7-7.9c.4-.3-.1-.5-.6-.2l-10.7 6.7-4.6-1.4c-1-.3-1-1 .2-1.5L20 3.7c.8-.3 1.6.2 1.5 1.5z" />
            </svg>
          </div>
          <div>
            <h3>Хочешь копнуть глубже до&nbsp;старта?</h3>
            <p>В&nbsp;канале — подробные правила игры, методология семи сфер, примеры заданий, философия проекта. Не&nbsp;обязательно. Если хочешь сразу — листай ниже.</p>
          </div>
          {/* TODO: real Telegram channel URL */}
          <a className="btn btn-ghost" href="#" target="_blank" rel="noopener">
            Открыть канал
            <span className="btn-arrow" aria-hidden="true">→</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function Register() {
  const [submitted, setSubmitted] = useState(false)
  const [nick, setNick] = useState('')
  const [email, setEmail] = useState('')

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    if (!nick || !email) return
    // TODO: wire to backend (Telegram / Supabase / mailto)
    console.log('[ARMAN registration]', { nick, email })
    setSubmitted(true)
  }

  return (
    <section className="register" id="register" data-screen-label="08 Register">
      <div className="register-bg" aria-hidden="true">
        <img src="/img/register-bg.webp" alt="" className="register-bg-img" loading="lazy" />
      </div>
      <div className="wrap">
        <div className="register-inner reveal">
          <div className="eyebrow">экран&nbsp;08 · кульминация</div>
          <h2 style={{ marginTop: 18 }}>Готов начать <span className="accent">свою игру?</span></h2>
          <p className="lead">Арман уже ждёт. Два поля&nbsp;— и&nbsp;он&nbsp;напишет тебе сегодня.</p>

          {!submitted ? (
            <form className="register-form" onSubmit={handleSubmit} noValidate>
              <div className="field">
                <label htmlFor="nick">Ник</label>
                <input
                  id="nick"
                  name="nick"
                  type="text"
                  placeholder="Как тебя называть в&nbsp;игре"
                  autoComplete="nickname"
                  required
                  value={nick}
                  onChange={(e) => setNick(e.target.value)}
                />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Куда написать тебе"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary" style={{ marginTop: 6 }}>
                Войти в игру
                <span className="btn-arrow" aria-hidden="true">→</span>
              </button>
              <p className="form-foot">
                Регистрируясь, соглашаешься с&nbsp;<a href="#">правилами игры</a> и&nbsp;<a href="#">политикой</a>.
              </p>
            </form>
          ) : (
            <div className="form-success" role="status" aria-live="polite">
              <h3>Арман получил твой ник.</h3>
              <p>Жди сообщение на&nbsp;почту сегодня.</p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="wrap foot-row">
        <a className="logo" href="#top">
          <span className="logo-mark" aria-hidden="true"></span>
          <span>ARMAN</span>
        </a>
        <div className="foot-links">
          <a href="#">Telegram</a>
          <a href="mailto:hi@arman.app">hi@arman.app</a>
          <a href="#">Политика</a>
        </div>
      </div>
    </footer>
  )
}
