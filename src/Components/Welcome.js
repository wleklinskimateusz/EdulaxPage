export default function Welcome(props) {
    return (
        <div id={props.id} className="hero min-h-screen bg-background">
            <div className="text-center hero-content">
                <div className="max-w-md">
                    <h1 className="mb-5 text-5xl font-bold text-primary">
                        {props.lang === "eng" ? "Hello there" : "Witamy!"}
                    </h1>
                    <p className="mb-5 text-primary">{
                        props.lang === "eng" ?
                            `Lorem ipsum dolor sit amet mauris nibh porta ligula erat id
                            sapien dui a neque lorem, id nulla mi, nec mauris viverra est
                            sem, posuere vitae, ipsum. Mauris urna. Nullam id mi. Donec vitae
                            ipsum ullamcorper libero laoreet ultricies massa. Nunc justo non
                            mattis lectus luctus et magnis dis parturient montes, nascetur
                            ridiculus mus. Donec porta, metus at sagittis sed, eros. Mauris tempor et,
                            tristique id, pretium eros ac massa. Nulla consequat magna non nunc. Nulla congue.
                            Proin rhoncus nunc, ac ligula erat in massa. Nunc elementum. Morbi commodo.
                            Suspendisse nec tellus. Nulla eleifend tincidunt, risus suscipit sed, ornare elementum nulla.
                            Nullam libero et est sem, sed neque. Etiam dapibus nisl eros, rhoncus non, arcu. Cum sociis
                            natoque penatibus et mi. Cras aliquet. In pretium wisi. Morbi commodo. Curabitur egestas.
                            Vestibulum ante in augue. Aenean ut ante ipsum primis in nulla eu nisl. Donec eleifend placerat.
                            Curabitur condimentum nulla. Suspendisse justo arcu, in lacus diam eu nisl at ipsum sit amet
                            nunc eget dolor leo at sem. Quisque ornare varius, leo. In ultricies viverra fermentum
                            laoreet, est turpis libero, accumsan.`
                                :
                            `Pocz??tek traktatu czasu by?? moralna, a kt??rym stworzenie wykonywa?? powinien by?? Istno???? maj??c??
                            wszelkie doskona??o??cie i przy tym razie wszelkie realno??ci To tylko godno???? kt??ra z pobudki mog??
                            szkod?? uczyni?? nieprzerwanej szcz????liwo??ci. Przedstawmy sobie rzeczy, lecz przy tym zale??y, ??e
                            to do gramatyki, Xenofonta i niepozwala?? ??adnego wyst??pku albo drugim przypadku bez nagrody lub
                            pobudk??, a wszak??e Dobro by?? w obcowaniu tj. on w nim powiedzie??, ??e bole??ci przykro??ci plagi i
                            pewna ustawa. My te?? mo??e to zgadza??o z owym mniemanym szcz????ciem. Robota, trudno??ci, praca,
                            fatyga, oczekiwany odpoczynek, usi??owanie wy??ama?? si?? te?? nieznamy dostatecznie ko??ca druku.
                            Spodziewaj??c si?? sam zaspokoi??, lecz przy takim miejscu tak rozwin????, ??e cz??sto chwalebna
                            poczciwo???? i absolutn?? konieczno????.`
                    }

                    </p>
                    <button className="btn btn-primary">{props.lang === "eng" ? "Get Started" : "Kliknij mnie"}</button>
                </div>
            </div>
        </div>
    )
}