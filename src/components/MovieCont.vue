<template>
  <main id="main">
    <section class="youtube__cont">
      <TitleCont name1="movie" name2="site" />
      <div class="container">
        <div class="youtube__inner">
          <div class="youtube__search">
            <form @submit.prevent="SearchMovies()">
              <div>
                <label for="" class="sr-only">검색하기</label>
                <input
                  type="search"
                  id="search"
                  placeholder="검색하기"
                  v-model="search"
                />
                <button type="submit" value="search">검색</button>
              </div>
            </form>
          </div>
          <div class="youtube__list">
            <ul>
              <li v-for="movie in movies" :key="movie.id">
                <a href="">
                  <img
                    :src="
                      'https://image.tmdb.org/t/p/w500/' + movie.poster_path
                    "
                    :alt="movie.title"
                  />
                  <p>
                    {{ movie.title }}
                  </p>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <ContactCont />
    </section>
  </main>
</template>
<script>
import TitleCont from "@/components/TitleCont.vue";
import ContactCont from "@/components/ContactCont.vue";
import { ref } from "vue";
export default {
  components: {
    TitleCont,
    ContactCont,
  },
  setup() {
    const movies = ref("");
    const search = ref("");
    const SearchMovies = () => {
      var requestOptions = {
        method: "GET",
        redirect: "follow",
      };
      if (search.value != "") {
        fetch(
          "https://api.themoviedb.org/3/search/movie?api_key=7f7a4782c5ffbe46d1d497f11139cca9&query=top-rated",
          requestOptions
        );
      }
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=7f7a4782c5ffbe46d1d497f11139cca9&query=${search.value}`,
        requestOptions
      )
        .then((response) => response.json())
        .then((data) => {
          movies.value = data.results;
          search.value = "";
          console.log(movies);
        })
        .catch((error) => console.log("error", error));
    };
    SearchMovies();
    return {
      movies,
      search,
      SearchMovies,
    };
  },
};
</script>
<style lang="scss" scoped>
.youtube__cont {
  background-color: var(--light);
}
.youtube__list {
  ul {
    display: flex;
    flex-wrap: wrap;
    li {
      flex: 1 1 23%;
      margin: 1%;
      img {
        border-radius: 0.4em;
      }
      p {
        color: var(--dark);
        font-family: var(--subKor_font);
        padding-top: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        display: -webkit-box;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
      }
    }
  }
}
.youtube__search {
  position: relative;
  h2 {
    color: var(--dark);
    font-size: 40px;
    font-family: var(--subKor_font);
    text-indent: -9999px;
    width: 0;
    height: 0;
  }
  input {
    border: 2px solid var(--light_border);
    width: 98%;
    background: var(--light);
    border-radius: 50px;
    padding: 1rem 3rem 1rem 2rem;
    color: var(--dark);
    font-family: var(--subKor_font);
    margin: 0 1%;
    margin-bottom: 5%;
  }
  button {
    position: absolute;
    right: 22px;
    top: 9px;
    background: transparent;
    border: 0;
    color: var(--light);
    background: var(--dark);
    font-family: var(--subKor_font);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    font-size: 12px;
    transition: opacity 0.3s ease;
    &:active {
      opacity: 0.7;
    }
  }
}
@media (max-width: 800px) {
  .youtube__list ul li {
    flex: 1 1 43%;
  }
}
</style>
