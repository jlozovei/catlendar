<script>
  import { getImage } from './services';
  import { format } from 'date-fns';

  const today = format(new Date(), 'dd');
  const month = format(new Date(), 'MMMM');

  let catImg = '';
  let isLoading = true;

  (async () => {
    catImg = await getImage();
    isLoading = false;
  })();
</script>

<main>
  <div class="calendar">
    <div class="calendar__header">
      <p class="calendar__day">{today}</p>
      <p class="calendar__month">{month}</p>
    </div>

    <div class={isLoading ? 'calendar__image calendar__image--loading' : 'calendar__image'}>
      <img src={catImg} alt="Cat of the day" />
    </div>
  </div>
</main>

<style>
  main {
    display: flex;
    flex-flow: row wrap;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .calendar {
    position: relative;
    width: 80%;
    max-width: 640px;
    margin: 0 auto;
    box-shadow: 0 0 10px 0 #7a7a7a;
  }

  .calendar p {
    margin: 0;
    font-weight: bold;
    text-transform: lowercase;
  }

  .calendar__header {
    padding: 24px;
    background-color: #2f8ab4;
    border-radius: 4px 4px 0 0;
  }

  .calendar__day {
    font-size: 64px;
  }

  .calendar__month {
    margin-top: 16px;
    font-size: 32px;
  }

  .calendar__image {
    position: relative;
    height: 400px;
    border-radius: 0 0 4px 4px;
    overflow: hidden;
  }

  .calendar__image img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    opacity: 1;
    transition: all ease-in-out 250ms;
  }

  .calendar__image.calendar__image--loading img {
    opacity: 0;
  }
</style>
