<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Menu Portage</title>
        <meta content="width=device-width, initial-scale=1.0" name="viewport">
        <meta content="Free Website Template" name="keywords">
        <meta content="Free Website Template" name="description">

        <!-- Head Librairy -->
        <?php include 'php/headLib.php'; ?>

    </head>

    <body>
        <!-- Nav Bar -->
            <?php include 'php/navbar.php'; ?>
        
        <!-- Page Header -->
            <div class="page-header mb-0">
                <div class="container">
                    <div class="row">
                        <div class="col-12">
                            <h2>Nous contacter</h2>
                        </div>
                    </div>
                </div>
            </div>

        <!-- Formulaire -->
        <form class="formulaire">
        
            <div class="formGauche">
                <div class="question">
                    <label for="Nom"> Nom</label>
                    <input type="text" id="Nom" name="Nom" placeholder="Votre Nom" required="">
                </div>
                <div class="question">
                    <label for="Prenom"> Prénom</label>
                    <input type="text" id="Prenom" name="Prenom" placeholder="Votre Prénom" required="">
                </div>
                <div class="question">
                    <label for="tel"> Numéro de téléphone</label>
                    <input type="text" id="Tel" name="Tel" placeholder="06 00 00 00 00" required="">
                </div>
                <div class="question">
                    <label for="mail"> Adresse mail</label>
                    <input type="text" id="Mail" name="Mail" placeholder="adressemail@gmail.com" required="">
                </div>
            </div>
        
            <div class="formDroite">
            
                <div class="question">
                    <label for="villes">Adresse de livraison : </label>
                        <select name="villes" id="villes">
                            <option value="Chamagne">Chamagne</option>
                            <option value="Charmes">Charmes</option>
                            <option value="Chatel-sur-Moselle">Chatel-sur-Moselle</option>
                            <option value="Chavelot">Chavelot</option>
                            <option value="Domèvre-sur-Durbion">Domèvre-sur-Durbion</option>
                            <option value="Essegney">Essegney</option>
                            <option value="Frizon">Frizon</option>
                            <option value="Girmont">Girmont</option>
                            <option value="Hadigny-les-Verrières">Hadigny-les-Verrières</option>
                            <option value="Igney">Igney</option>
                            <option value="Langley">Langley</option>
                            <option value="Moriville">Moriville</option>
                            <option value="Nomexy">Nomexy</option>
                            <option value="Pallegney">Pallegney</option>
                            <option value="Portieux">Portieux</option>
                            <option value="la Verrerie de Portieux">la Verrerie de Portieux</option>
                            <option value="Socourt">Socourt</option>
                            <option value="Vaxoncourt">Vaxoncourt</option>
                            <option value="Vincey">Vincey</option>
                            <option value="Autre">Autre</option>
                        </select><br>
                </div>
            
                <range-slider min=1 max=14 step=1 value="2" id="rangSlider" class="question"></range-slider>

                <div class="question">
                    <label for="message">Une question, un message, une demande particuliaire, . . .</label>
                    <textarea id="message" name="message" rows="5" placeholder="Bonjour, " required=""></textarea>
                </div>

            </div>

        </form>

        <!-- Footer Start -->
        <?php include 'php/footer.php'; ?>
        <!-- Footer End -->

        <a href="#" class="back-to-top"><i class="fa fa-chevron-up"></i></a>

        <!-- Body Librairy -->
        <?php include 'php/bodyLib.php'; ?>
        <script src='https://unpkg.com/range-slider-element@latest'></script>
        <script src="../js/formulaire.js"></script>

    </body>
</html>