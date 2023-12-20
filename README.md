# Dotapea revival 

### description 

re-publication du site de base de connaissance ex dotapea.com:

[site-archive](https://web.archive.org/web/20191027030704/http://online-dotapea-archive.e-monsite.com/medias/files/accueil.html)

ou 





### process

- [x] scrapping des pages depuis [boivin.fr](https://cbonvin.fr/dotapea)  dans le rep www.dotapea.com
- [x] creer un convertisseur html->markdown
- [ ] creer  un parseur de lien
- recreer une arborescence & navigation plus coherente


### POC

l'app de parsing est  pour l'instant codée en haxe [haxe.org](http://www.haxe.org) et compilée en nodeJS. 
libs npm ( cf package.json): 
- mozilla-readibility : lecteur ( reader-mode) de firefox pour épurer l'html 
- turndown : conversion en markdown
- lix ( haxe like npm ): 

les fichiers markdown  sont exportés vers le repertoire www/md. 


### install 

-install npm (node & npm)
- install lix [how-to ](https://github.com/lix-pm/lix.client#installation)
- download lix libs  ( via haxe_librairies)

terminal:
```
lix download
```
- download npm libs ( via package.json)

terminal:
```
npm install
```

- compile 
terminal
```
haxe build.hxml
````


