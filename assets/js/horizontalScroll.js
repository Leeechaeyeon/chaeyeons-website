/*--------------------
Wheel Option
-------------------*/
let option = {
    x: 0,
    speed: 1.5,
    limit: 2,
    time: 0.3,
  };
  
  
/*--------------------
Init Scrollbar
-------------------*/
document.addEventListener('DOMContentLoaded', () => {
  const scrollbar = Scrollbar.init(document.querySelector('#scrollbar'), {
    overscrollEffect: 'bounce',
    alwaysShowTracks: true
  });


  const listener = (status) => {
    active = parseInt(status.offset.x / 900);
    
    bullets.forEach(b => {b.classList.remove('active')});
    bullets[active].classList.add('active');
  };
  scrollbar.addListener(listener);
  
  
  /*--------------------
  Pagination
  -------------------*/
  let active = 0;
  let pag, bullets;
  
  const pagination = () => {
    const items = document.querySelectorAll('.item');
    pag = document.createElement('div');
    pag.classList.add('pagination');
    items.forEach((item, i) => {
      const bullet = document.createElement('button');
      bullet.classList.add('bullet');
      bullet.innerHTML = i
      pag.appendChild(bullet)
    });
    document.getElementById('scrollbar').appendChild(pag);
    bullets = document.querySelectorAll('.bullet');
  
    bullets.forEach((b, i) => {
      b.addEventListener('click', el => {
        bullets.forEach(el => {el.classList.remove('active')})
        el.target.classList.add('active');
        const i = parseInt(el.target.innerHTML);
        active = i;
  
        let x = 500 * i;
        if (x > scrollbar.limit.x) {
          x = scrollbar.limit.x
        }
  
        TweenMax.to(option, 1, {
          x: x,
          ease: Power4.easeOut,
          onUpdate: () => {
            scrollbar.scrollTo(option.x, 0, 0);
          }
        })
      });
    });
  }
  pagination();
  
  
  /*--------------------
  Mousewheel
  -------------------*/
  const horizontalScroll = (e) => {
    const y = parseInt(e.deltaY * option.speed);
    let x = scrollbar.offset.x + y;
    x = x < 0 ? 0 : x > scrollbar.limit.x ? scrollbar.limit.x : x;
  
    TweenMax.to(option, option.time, {
      x: x,
      onUpdate: () => {
        scrollbar.scrollTo(option.x, 0, 0);
      }
    })
  };
  document.querySelector('.wrapper').addEventListener('mousewheel', (e) => {
    horizontalScroll(e)
  });
  
});
