import React from 'react'
import "./laboratoire.css"
import labo from "../assets/labo-min.jpg";
import laboGroupImage1 from "../assets/kind.jpg";
import laboGroupImage2 from "../assets/overjoyed.jpg";
import laboGroupImage3 from "../assets/satisfied.jpg";

function Laboratoire() {
    return (
        <div>
            <div className="content_wrap">

                <div className="content"></div>
                <article className="post_item post_item_single page">
                    <section className="post_content">
                        <div className="sc_section_inner" style={{ marginTop: 170 }}>
                            <h2 className="sc_section_title sc_item_title line_show">LE LABORATOIRE</h2>
                            <div className="sc_section_content_wrap">
                                <div className="text_column content_element  mockingbird-text">
                                    <div className="wrapper">
                                        <div className="columns_wrap sc_columns columns_nofluid">

                                            <div className="column-4_4 sc_column_item span_3">
                                                <div className="sc_promo custom_promo_01 scheme_light sc_promo_size_large">
                                                    <div className="sc_promo_inner">
                                                        <div className="sc_promo_image ">
                                                            <img src={labo} className="laboImage" />
                                                        </div>
                                                        <div className="sc_promo_block sc_align_left cu_block_1">
                                                            <div className="sc_promo_block_inner cu_pds_1">
                                                                <div className="sc_promo_content">
                                                                    <h6 className="sc_title sc_title_regular sc_align_right custom_title_01">SP</h6>
                                                                    <h6 className="sc_title sc_title_regular cu_block_2">
                                                                        <em> Le laboratoire dermatologique SIGMA PHARMA offre aux personnes les plus exigeantes des soins de Haute Qualit??.
                                                                            <br />
                                                                            Chaque soin est une formule d???exception issue du savoir-faire des experts de la sant??.
                                                                            <br />
                                                                            Alliant rigueur pharmaceutique et raffinement, pour chaque actif une formule sur-mesure qui contribue pleinement ?? son efficacit?? et cr??e une exp??rience incomparable sur la peau.
                                                                            <br />
                                                                            Il offre des produits d???hygi??ne et de soin adapt??s ?? tous les types de peau : des peaux grasses ?? tendance acn??ique aux peaux s??ches en passant par les peaux sensibles. Rigueur pharmaceutique et Savoir-faire dermo-cosm??tique pr??sident au d??veloppement de nos produits.
                                                                            <br />
                                                                            SIGMA PHARMA s???est construit sur trois valeurs essentielles l???honn??tet?? et la transparence, l???ambition, l???exigence absolue et la s??curisation dermatologique.</em>
                                                                    </h6>
                                                                    <h2 className="sc_title sc_title_regular">

                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc_empty_space em_height_8-4">
                                            <span className="sc_empty_space_inner"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc_row row sc_row-fluid">
                            <div className="column sc_column_container sc_col-sm-12">
                                <div className="sc_column-inner ">
                                    <div className="wrapper">
                                        <div className="sc_empty_space em_height_8-46">
                                            <span className="sc_empty_space_inner"></span>
                                        </div>
                                        <div className="columns_wrap sc_columns columns_nofluid no_margins equal_height">
                                            <div className="column-1_3 sc_column_item" style={{ height: 410 }}>
                                                <div className="sc_column_item_inner cu_block_4">
                                                    <img src={laboGroupImage1} className="laboImage" />
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item" style={{ height: 410 }}>
                                                <div className="sc_column_item_inner cu_block_5">
                                                    <h2 className="sc_title sc_title_regular sc_align_center text">honnetet?? et transparence :</h2>
                                                    <div className="sc_line sc_line_position_center_center sc_line_style_solid sousTitreBar"></div>
                                                    <div className="text_column content_element ">
                                                        <div className="wrapper">
                                                            <p className="cu_text_c">
                                                                Actifs reconnus scientifiquement,
                                                                <br />  s??lection des mati??res premi??res et tol??rabilit?? dermatologique.

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item" style={{ height: 410 }}>
                                                <div className="sc_column_item_inner cu_block_7">
                                                    <img src={laboGroupImage3} className="laboImage" />
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item">
                                                <div className="sc_column_item_inner cu_block_5">
                                                    <h2 className="sc_title sc_title_regular sc_align_center text">L???ambition :</h2>
                                                    <div className="sc_line sc_line_position_center_center sc_line_style_solid sousTitreBar"></div>
                                                    <div className="text_column content_element ">
                                                        <div className="wrapper">
                                                            <p className="cu_text_c">
                                                                D??velopper des solutions et des soins dermatologiques uniques.
                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item" style={{ height: 410 }}>
                                                <div className="sc_column_item_inner cu_block_6">
                                                    <img src={laboGroupImage2} className="laboImage" />
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item">
                                                <div className="sc_column_item_inner cu_block_5">
                                                    <h2 className="sc_title sc_title_regular sc_align_center text">L???exigence absolue et la s??curisation dermatologique :</h2>
                                                    <div className="sc_line sc_line_position_center_center sc_line_style_solid sousTitreBarLongP"></div>
                                                    <div className="text_column content_element ">
                                                        <div className="wrapper">
                                                            <p className="cu_text_c">
                                                                Garantir des soins efficaces avec la plus grande s??curit?? dermatologique.
                                                                Un travail d?????quipes professionnelles,
                                                                nous permet de poursuivre nos objectifs communs avec respect et confiance.
                                                                SIGMA PHARMA est un laboratoire sp??cialiste en dermatologie,
                                                                il d??veloppe et commercialise des produits parapharmaceutiques, des produits cosm??tiques, des compl??ments alimentaires offrant des solutions innovantes pour les motifs de consultation les plus courants.

                                                            </p>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc_empty_space em_height_8-46">
                                            <span className="sc_empty_space_inner"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <section className='post_author author vcard'>
                    <h1 className="sc_title sc_title_regular">CHARTE SIGMA PHARMA</h1>
                    <p>Tous nos produits sont d??velopp??s en tenant compte des besoins r??els des patients.
                        Nos soins sont compos??s d???actifs reconnus et utiles.</p>
                </section>
                <section className='post_author author vcard'>
                    <h1 className="sc_title sc_title_regular">R&D :</h1>
                    <p>SIGMA PHARMA a le souhait de d??velopper des soins dermatologiques innovants, accessibles ?? tous, pour se sentir mieux au quotidien quels que soient les probl??mes de peaux rencontr??s.
                        C???est pourquoi, les probl??mes dermatologiques sont au c??ur de nos programmes de recherche et de d??veloppement.
                        En ??troite collaboration avec les experts de la sant?? pour apporter des solutions innovantes et r??pondre au mieux aux besoins des patients et aux attentes des m??decins.
                        Proposer des produits avec des ingr??dients s??rs dont l???efficacit?? a ??t?? prouv??e.
                        L???efficacit?? et la tol??rance des produits sont ??valu??es avec rigueur avant la commercialisation d???un produit.
                        L???agr??ment d???utilisation des produits sont pris en compte d??s leur conception.
                    </p>
                </section>

                <div className="sc_empty_space em_height_1">
                    <span className="sc_empty_space_inner"></span>
                </div>

                <h2 className="sc_section_title sc_item_title line_show">Notre Position</h2>

                <iframe className="sc_googlemap" style={{ height: 500, width: 1700 }}
                    src="https://maps.google.com/maps?width=993&amp;height=638&amp;hl=en&amp;q=35.827947, 10.5982700&amp;t=p&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                    aria-label="56-34 Waldronnnqsdzedezdezezdfnnn St Flushing, NY 11368, USA">
                </iframe>

                <div className="sc_empty_space em_height_3-7">
                    <span className="sc_empty_space_inner"></span>
                </div>



                







            </div>
        </div>

    )
}

export default Laboratoire