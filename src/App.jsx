import { Title } from './components/Title'
import './App.scss'
import { Container } from './components/Container'
import { Card } from './components/Card'
import { Footer } from './components/Footer'
import imgURL from './assets/goods.png'
import { Header } from './components/Header'
import { Breadcrumbs } from './components/Breadcrumbs'

function App() {

  return (
    <>
        <Header />
        <Container>
            <section>
                <Breadcrumbs links={[{name: 'Главная', href: "#"}, {name: 'Меню', href: "#"}, {name: 'Категория', href: "#"}]} /> 
                <Title>Название категории</Title>
                <div className="cards">
                    <Card name={'Жульен с грибами'} description={'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным. и еще плюс описание чтобы текст не был таким коротким. Попробуйте эт вкуснейший жульен'} price={1000} imgSrc={imgURL}/>
                    <Card name={'Маринованные огурцы'} description={'Эти вкусные малосольные огурцы - настоящее наслаждение для вашего стола! Их сочность и приятный аромат будут радовать вас во время каждого приема пищи. Благодаря своим ярко-зелёным кожицам и характерным пупырчатым формам, они выделяются среди других овощей и становятся визуальной приметой любого блюда. Простота приготовления и универсальность позволяют использовать их как самостоятельное блюдо, так и добавлять в различные салаты, бутерброды или закуски.'} price={5000} imgSrc={imgURL}/>
                    <Card name={'Помидоры'} description={'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.'} price={1000} imgSrc={imgURL}/>
                    <Card name={'Лук'} description={'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.'} price={1000} imgSrc={imgURL}/>
                    <Card name={'Перец'} description={'Здесь будет описание товара. У некоторых товаров описание может быть коротким, а у некоторых - длинным.'} price={1000} imgSrc={imgURL}/>
                </div>
            </section> 
        </Container>
    <Footer/>
    </>
  )
}

export default App
