const quotes = [
  {
    quote: '이제 우리는 루소가 왜 걸었는지 이해할 수 있다. 걷는 데에는 인류 문명의 인위적 요소가 전혀 필요치 않다. 가축도, 사륜마차도, 길도 필요없다. 산책자는 자유롭고, 아무런 구애도 받지 않는다. 순수한 자기 사랑이다.',
    author: '소크라테스 익스프레스'
  },
  {
    quote: '인생은 평화와 행복만으로는 지속될 수 없다. 고통을 두려워하지 말고 슬퍼하지 말라. 희망은 언제나 고통의 언덕 너머에서 기다린다.',
    author: 'Katherine Mansfield'
  },
  {
    quote: '어느 누구도 과거로 돌아가서 새롭게 시작할 수는 없지만 지금부터 시작해서 새로운 결실을 맺을 수는 있다.',
    author: 'Karl Barth'
  },
  {
    quote: '흔들리는 건 당신의 눈이다. 활시위를 당기는 손이다. 명중할 수 있을까 의심하는 마음이다. 과녁은 늘 그 자리에 있다.',
    author: '정철 -한 글자 중-'
  },
  {
    quote: '이뤄지지 않은 사랑도 사랑이라 부르는데 이뤄지지 않은 꿈은 왜 실패라고 부르냐',
    author: '타블로 -블로노트 중-'
  },
  {
    quote: '"나는 날마다 모든 면에서 점점 나아지고 있다." 한동안 이 말을 믿고 지내 보라. 그러면 진짜 그렇게 된다는 것을 경험할 것이다.',
    author: 'Mark Ellen'
  },
  {
    quote: 'We think we know someone, but the truth is that we only know the version of them they have chosen to show us.',
    author: 'Taylor Swift'
  },
  {
    quote: 'We are what we love. This is Lover.',
    author: 'Taylor Swift'
  },
  {
    quote: 'This is my simple religion. There is no need for temples, no need for complicated philosophy. Our own brain, our own heart is our temple',
    author: 'The Dalai Lama'
  },
  {
    quote: '아무렇지 않지 않은 사람이 아무렇지도 않아 보였다면 그게 얼마나 눈물겨운 노력의 결과였는지 생각해본 적 없으시죠',
    author: '박완서 -기나긴 하루 중-'
  }
];

const quote = document.querySelector('.quote p:first-child');
const author = document.querySelector('.quote p:last-child');

const todayQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todayQuote.quote;
author.innerText = todayQuote.author;
