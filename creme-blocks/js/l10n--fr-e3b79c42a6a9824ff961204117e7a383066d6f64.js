var LANGUAGE_CODE = "fr";
var LANGUAGE_BIDI = false;

/* gettext library */

var catalog = new Array();

function pluralidx(n) {
  var v=n>1;
  if (typeof(v) == 'boolean') {
    return v ? 1 : 0;
  } else {
    return v;
  }
}
catalog['%s result(s) on %s'] = '%s r\u00e9sultat(s) sur %s';
catalog['<= to restore the last coherent state. An error correction will restabilize all other ones.'] = '<= pour retrouver le dernier \u00e9tat coh\u00e9rent. La correction d\'une erreur sur une ligne restabilisera toutes les autres lignes.';
catalog['Add all'] = 'Ajouter tout';
catalog['Add'] = 'Ajouter';
catalog['All day'] = 'Jour Entier';
catalog['All'] = 'Tout';
catalog['April'] = 'Avril';
catalog['Are you sure ?'] = '\u00cates-vous s\u00fbr ?';
catalog['August'] = 'Ao\u00fbt';
catalog['Available'] = 'Disponible(s)';
catalog['Calendar'] = 'Calendrier';
catalog['Cancel'] = 'Annuler';
catalog['Canvas image'] = 'Capture du graphique';
catalog['Check the box if you consider as treated'] = 'Merci de cocher si vous consid\u00e9rez comme trait\u00e9';
catalog['Chosen'] = 'Choisi(s)';
catalog['Close'] = 'Fermer';
catalog['Day'] = 'Jour';
catalog['December'] = 'D\u00e9cembre';
catalog['Delete'] = 'Supprimer';
catalog['Down'] = 'Descendre';
catalog['Drag and drop the columns to order them.'] = 'Glissez-d\u00e9posez les colonnes pour les ordonner.';
catalog['Error !'] = 'Erreur !';
catalog['Error during loading the page.'] = 'Le chargement de la page a \u00e9chou\u00e9';
catalog['Error'] = 'Erreur';
catalog['Error, please reload the page.'] = 'Erreur, veuillez recharger la page.';
catalog['February'] = 'F\u00e9vrier';
catalog['Friday'] = 'Vendredi';
catalog['Hide empty fields'] = 'Cacher les champs vides';
catalog['Information'] = 'Informations';
catalog['Invalid percentage.'] = 'Pourcentage invalide.';
catalog['January'] = 'Janvier';
catalog['July'] = 'Juillet';
catalog['June'] = 'Juin';
catalog['Loading...'] = 'Chargement...';
catalog['March'] = 'Mars';
catalog['May'] = 'Mai';
catalog['Monday'] = 'Lundi';
catalog['Month'] = 'Mois';
catalog['No data'] = 'Aucune donn\u00e9e';
catalog['No result'] = 'Aucun r\u00e9sultat';
catalog['No selected view'] = 'Aucune vue s\u00e9lectionn\u00e9e';
catalog['None available'] = 'Aucun disponible';
catalog['Nothing is selected.'] = 'Rien n\'est s\u00e9lectionn\u00e9.';
catalog['November'] = 'Novembre';
catalog['October'] = 'Octobre';
catalog['Ok'] = 'Ok';
catalog['On the line'] = 'Sur la ligne';
catalog['Pdf file (PDF)'] = 'Fichier Pdf (PDF)';
catalog['Please select a type.'] = 'Veuillez s\u00e9lectionner un type.';
catalog['Please select at least one entity.'] = 'Veuillez s\u00e9lectionner au moins un enregistrement.';
catalog['Please select only one entity.'] = 'Veuillez s\u00e9lectioner un seul enregistrement.';
catalog['Preview and order of the %s columns'] = 'Aper\u00e7u et ordre des %s colonnes';
catalog['Preview of the column'] = 'Aper\u00e7u de la colonne';
catalog['Preview'] = 'Aper\u00e7u';
catalog['Process done'] = 'Op\u00e9ration termin\u00e9e';
catalog['Reload'] = 'Recharger';
catalog['Remove all'] = 'Enlever tout';
catalog['Remove the column \'%s\''] = 'Enlever la colonne \'%s\'';
catalog['Remove'] = 'Enlever';
catalog['Saturday'] = 'Samedi';
catalog['Search results...'] = 'R\u00e9sultats de recherche...';
catalog['Select a type'] = 'S\u00e9lectionnez un type';
catalog['Select'] = 'S\u00e9lectionnez';
catalog['Send'] = 'Envoyer';
catalog['September'] = 'Septembre';
catalog['Show empty fields'] = 'Montrer les champs vides';
catalog['Some errors were found on your lines. Click => '] = 'Des erreurs ont \u00e9t\u00e9 trouv\u00e9es sur vos lignes. Cliquez => ';
catalog['Sunday'] = 'Dimanche';
catalog['The page will be reload !'] = 'La page va \u00eatre recharg\u00e9e !';
catalog['The preview is empty. Select some fields and relationships to add some columns.'] = 'L\'aper\u00e7u est vide. S\u00e9lectionnez des champs et des relations pour y ajouter des colonnes.';
catalog['Thursday'] = 'Jeudi';
catalog['Today'] = 'Aujourd\'hui';
catalog['Tuesday'] = 'Mardi';
catalog['Up'] = 'Monter';
catalog['Validate the selection'] = 'Valider la s\u00e9lection';
catalog['View as image'] = 'Capturer une image du graphique';
catalog['Week'] = 'Semaine';
catalog['Wesnesday'] = 'Mercredi';
catalog['You do not have permission, the change will not be saved.'] = 'Vous n\'avez pas la permission, les changements ne seront pas sauv\u00e9s.';
catalog['Your discount amount is superior than the amount of the line where you try to apply it.'] = 'Le montant de votre remise globale d\u00e9passe celui de la ligne sur laquelle vous essayez de l\'appliquer.';
catalog['Your unit discount is superior than the unit price of the product/service of the line where you try to apply it.'] = 'Le montant de votre remise unitaire d\u00e9passe celui du produit/service de la ligne sur laquelle vous essayez de l\'appliquer.';
catalog['here'] = 'ici';


function gettext(msgid) {
  var value = catalog[msgid];
  if (typeof(value) == 'undefined') {
    return msgid;
  } else {
    return (typeof(value) == 'string') ? value : value[0];
  }
}

function ngettext(singular, plural, count) {
  value = catalog[singular];
  if (typeof(value) == 'undefined') {
    return (count == 1) ? singular : plural;
  } else {
    return value[pluralidx(count)];
  }
}

function gettext_noop(msgid) { return msgid; }

function pgettext(context, msgid) {
  var value = gettext(context + '' + msgid);
  if (value.indexOf('') != -1) {
    value = msgid;
  }
  return value;
}

function npgettext(context, singular, plural, count) {
  var value = ngettext(context + '' + singular, context + '' + plural, count);
  if (value.indexOf('') != -1) {
    value = ngettext(singular, plural, count);
  }
  return value;
}

function interpolate(fmt, obj, named) {
  if (named) {
    return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
  } else {
    return fmt.replace(/%s/g, function(match){return String(obj.shift())});
  }
}

/* formatting library */

var formats = new Array();

formats['DATETIME_FORMAT'] = 'd-m-Y H:i:s';
formats['DATE_FORMAT'] = 'd-m-Y';
formats['DECIMAL_SEPARATOR'] = '.';
formats['MONTH_DAY_FORMAT'] = 'F j';
formats['NUMBER_GROUPING'] = '0';
formats['TIME_FORMAT'] = 'P';
formats['FIRST_DAY_OF_WEEK'] = '0';
formats['TIME_INPUT_FORMATS'] = ['%H:%M:%S', '%H:%M'];
formats['THOUSAND_SEPARATOR'] = ',';
formats['DATE_INPUT_FORMATS'] = ['%d-%m-%Y', '%d/%m/%Y', '%Y-%m-%d', '%m/%d/%Y', '%m/%d/%y', '%b %d %Y', '%b %d, %Y', '%d %b %Y', '%d %b, %Y', '%B %d %Y', '%B %d, %Y', '%d %B %Y', '%d %B, %Y'];
formats['YEAR_MONTH_FORMAT'] = 'F Y';
formats['SHORT_DATE_FORMAT'] = 'd-m-Y';
formats['SHORT_DATETIME_FORMAT'] = 'm/d/Y P';
formats['DATETIME_INPUT_FORMATS'] = ['%d-%m-%Y', '%d/%m/%Y', '%Y-%m-%d %H:%M:%S', '%Y-%m-%d %H:%M', '%Y-%m-%d', '%m/%d/%Y %H:%M:%S', '%m/%d/%Y %H:%M', '%m/%d/%Y', '%m/%d/%y %H:%M:%S', '%m/%d/%y %H:%M', '%m/%d/%y', '%d-%m-%Y %H:%M:%S', '%d/%m/%Y %H:%M:%S', '%d-%m-%Y %H:%M', '%d/%m/%Y %H:%M', '%Y-%m-%dT%H:%M:%S.%fZ', '%Y-%m-%dT%H:%M:%S'];

function get_format(format_type) {
    var value = formats[format_type];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return value;
    }
}

window.hgettext = function(text) { return gettext(text); };
window.hngettext = function(singular, plural, count) { return ngettext(singular, plural, count); };
