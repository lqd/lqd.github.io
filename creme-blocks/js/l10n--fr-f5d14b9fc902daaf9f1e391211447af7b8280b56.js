var LANGUAGE_CODE = "fr";
var LANGUAGE_BIDI = false;


(function (globals) {

  var django = globals.django || (globals.django = {});

  
  django.pluralidx = function (n) {
    var v=n>1;
    if (typeof(v) == 'boolean') {
      return v ? 1 : 0;
    } else {
      return v;
    }
  };
  

  
  /* gettext library */

  django.catalog = {
    " %d entity cannot be deleted.": [
      "%d entit\u00e9 n'a pu \u00eatre supprim\u00e9e.", 
      "%d entit\u00e9s n'ont pu \u00eatre supprim\u00e9es."
    ], 
    "%0$d address from": [
      "%0$d adresse de", 
      "%0$d adresses de"
    ], 
    "%0$d of": [
      "%0$d adresse de", 
      "%0$d adresses de"
    ], 
    "%d entity have been deleted.": [
      "%d entit\u00e9 a \u00e9t\u00e9 supprim\u00e9e.", 
      "%d entit\u00e9s ont \u00e9t\u00e9 supprim\u00e9es."
    ], 
    "%d result of %d": [
      "%d r\u00e9sultat sur %d", 
      "%d r\u00e9sultats sur %d"
    ], 
    "%d selection": [
      "%d s\u00e9lection", 
      "%d s\u00e9lections"
    ], 
    "%s result(s) on %s": "%s r\u00e9sultat(s) sur %s", 
    "Add": "Ajouter", 
    "Add all": "Ajouter tout", 
    "Alert": "Message", 
    "All": "Tout", 
    "All day": "Jour Entier", 
    "April": "Avril", 
    "Are you sure ?": "\u00cates-vous s\u00fbr ?", 
    "August": "Ao\u00fbt", 
    "Available": "Disponible(s)", 
    "Bad Request": "Requ\u00eate invalide", 
    "Billing": "Facturation", 
    "Calendar": "Calendrier", 
    "Cancel": "Annuler", 
    "Canvas image": "Capture du graphique", 
    "Check the box if you consider as treated": "Merci de cocher si vous consid\u00e9rez comme trait\u00e9", 
    "Chosen": "Choisi(s)", 
    "Close": "Fermer", 
    "Confirm": "Confirmation", 
    "Conflict": "Conflit", 
    "Connection Refused": "Connexion refus\u00e9e", 
    "Day": "Jour", 
    "December": "D\u00e9cembre", 
    "Delete": "Supprimer", 
    "Do you really want to restore initial values of this line ?": "Voulez vous vraiment r\u00e9initialiser les valeurs de cette ligne ?", 
    "Do you really want to save all the modifications done on the lines of this document ?": "Voulez vous vraiment enregistrer toutes les modifications sur les lignes de ce document ?", 
    "Down": "Descendre", 
    "Drag and drop the columns to order them.": "Glissez-d\u00e9posez les colonnes pour les ordonner.", 
    "Error": "Erreur", 
    "Error !": "Erreur !", 
    "Error during loading the page.": "Le chargement de la page a \u00e9chou\u00e9", 
    "Error, please reload the page.": "Erreur, veuillez recharger la page.", 
    "Errors report": "Rapport d'erreurs", 
    "Export": "Export", 
    "February": "F\u00e9vrier", 
    "Forbidden Access": "Interdit", 
    "Friday": "Vendredi", 
    "Hide empty fields": "Cacher les champs vides", 
    "Internal Error": "Erreur interne", 
    "January": "Janvier", 
    "July": "Juillet", 
    "June": "Juin", 
    "Loading...": "Chargement...", 
    "Manual location": "Localisation manuelle", 
    "Map": "Plan", 
    "March": "Mars", 
    "May": "Mai", 
    "Monday": "Lundi", 
    "Month": "Mois", 
    "No address from": "Aucune adresse de", 
    "No matching location": "Non localis\u00e9", 
    "No result": "Aucun r\u00e9sultat", 
    "No selected view": "Aucune vue s\u00e9lectionn\u00e9e", 
    "None available": "Aucun disponible", 
    "None of": "Aucune adresse de", 
    "Not Acceptable": "Invalide", 
    "Not Found": "Non trouv\u00e9", 
    "Not localized": "Non localis\u00e9", 
    "Nothing is selected.": "Rien n'est s\u00e9lectionn\u00e9.", 
    "November": "Novembre", 
    "October": "Octobre", 
    "Ok": "Ok", 
    "Organisation": "Soci\u00e9t\u00e9", 
    "Partially matching location": "Localisation incompl\u00e8te", 
    "Pdf file (PDF)": "Fichier Pdf (PDF)", 
    "Please select at least one entity.": "Veuillez s\u00e9lectionner au moins une fiche.", 
    "Please select only one entity.": "Veuillez s\u00e9lectioner un seul enregistrement.", 
    "Preview": "Aper\u00e7u", 
    "Preview and order of the %s columns": "Aper\u00e7u et ordre des %s colonnes", 
    "Preview of the column": "Aper\u00e7u de la colonne", 
    "Process done": "Op\u00e9ration effectu\u00e9e", 
    "Reload the page or click here. If the problem persists, please contact your administrator.": "Rechargez la page ou cliquez ici. Si le probl\u00e8me persiste, veuillez contacter votre administrateur.", 
    "Remove": "Enlever", 
    "Remove all": "Enlever tout", 
    "Remove the column '%s'": "Enlever la colonne '%s'", 
    "Saturday": "Samedi", 
    "Save": "Enregistrer", 
    "Search results: %d entity": [
      "R\u00e9sultats de recherche : %d fiche", 
      "R\u00e9sultats de recherche : %d fiches"
    ], 
    "Search results\u2026": "R\u00e9sultats de recherche\u2026", 
    "Select": "S\u00e9lectionnez", 
    "Select one option": "S\u00e9lectionnez un choix", 
    "Select some options": "S\u00e9lectionnez un ou plusieurs choix", 
    "Select the concerned organisation.": "S\u00e9lectionnez la soci\u00e9t\u00e9 concern\u00e9e.", 
    "Select the export format": "S\u00e9lectionnez le format d'export", 
    "Select the export format of your billing document": "S\u00e9lectionnez le format d'export de votre document comptable", 
    "Selection": "S\u00e9lection", 
    "September": "Septembre", 
    "Show empty fields": "Montrer les champs vides", 
    "Sunday": "Dimanche", 
    "The page will be reload !": "La page va \u00eatre recharg\u00e9e !", 
    "The preview is empty. Select some fields and relationships to add some columns.": "L'aper\u00e7u est vide. S\u00e9lectionnez des champs et des relations pour y ajouter des colonnes.", 
    "Thursday": "Jeudi", 
    "Today": "Aujourd'hui", 
    "Tuesday": "Mardi", 
    "Unauthorized": "Non authentifi\u00e9", 
    "Up": "Monter", 
    "Validate the selection": "Valider la s\u00e9lection", 
    "View as image": "Capturer une image du graphique", 
    "Warning": "Attention", 
    "Week": "Semaine", 
    "Wesnesday": "Mercredi", 
    "Who is the source, managed by Creme, for your billing document ?": "Quelle soci\u00e9t\u00e9, g\u00e9r\u00e9e par Cr\u00e8me, souhaitez-vous utiliser pour g\u00e9n\u00e9rer votre document comptable ?", 
    "You do not have permission, the change will not be saved.": "Vous n'avez pas la permission, les changements ne seront pas sauv\u00e9s.", 
    "You modified your lines.": "Vous avez modifi\u00e9 vos lignes."
  };

  django.gettext = function (msgid) {
    var value = django.catalog[msgid];
    if (typeof(value) == 'undefined') {
      return msgid;
    } else {
      return (typeof(value) == 'string') ? value : value[0];
    }
  };

  django.ngettext = function (singular, plural, count) {
    var value = django.catalog[singular];
    if (typeof(value) == 'undefined') {
      return (count == 1) ? singular : plural;
    } else {
      return value[django.pluralidx(count)];
    }
  };

  django.gettext_noop = function (msgid) { return msgid; };

  django.pgettext = function (context, msgid) {
    var value = django.gettext(context + '\x04' + msgid);
    if (value.indexOf('\x04') != -1) {
      value = msgid;
    }
    return value;
  };

  django.npgettext = function (context, singular, plural, count) {
    var value = django.ngettext(context + '\x04' + singular, context + '\x04' + plural, count);
    if (value.indexOf('\x04') != -1) {
      value = django.ngettext(singular, plural, count);
    }
    return value;
  };
  

  django.interpolate = function (fmt, obj, named) {
    if (named) {
      return fmt.replace(/%\(\w+\)s/g, function(match){return String(obj[match.slice(2,-2)])});
    } else {
      return fmt.replace(/%s/g, function(match){return String(obj.shift())});
    }
  };


  /* formatting library */

  django.formats = {
    "DATETIME_FORMAT": "d-m-Y H:i:s", 
    "DATETIME_INPUT_FORMATS": [
      "%d-%m-%Y", 
      "%d/%m/%Y", 
      "%Y-%m-%d %H:%M:%S", 
      "%Y-%m-%d %H:%M", 
      "%Y-%m-%d", 
      "%m/%d/%Y %H:%M:%S", 
      "%m/%d/%Y %H:%M", 
      "%m/%d/%Y", 
      "%m/%d/%y %H:%M:%S", 
      "%m/%d/%y %H:%M", 
      "%m/%d/%y", 
      "%d-%m-%Y %H:%M:%S", 
      "%d/%m/%Y %H:%M:%S", 
      "%d-%m-%Y %H:%M", 
      "%d/%m/%Y %H:%M", 
      "%Y-%m-%dT%H:%M:%S.%fZ", 
      "%Y-%m-%dT%H:%M:%S"
    ], 
    "DATE_FORMAT": "d-m-Y", 
    "DATE_INPUT_FORMATS": [
      "%d-%m-%Y", 
      "%d/%m/%Y", 
      "%Y-%m-%d", 
      "%m/%d/%Y", 
      "%m/%d/%y", 
      "%b %d %Y", 
      "%b %d, %Y", 
      "%d %b %Y", 
      "%d %b, %Y", 
      "%B %d %Y", 
      "%B %d, %Y", 
      "%d %B %Y", 
      "%d %B, %Y"
    ], 
    "DECIMAL_SEPARATOR": ".", 
    "FIRST_DAY_OF_WEEK": "0", 
    "MONTH_DAY_FORMAT": "F j", 
    "NUMBER_GROUPING": "0", 
    "SHORT_DATETIME_FORMAT": "m/d/Y P", 
    "SHORT_DATE_FORMAT": "d-m-Y", 
    "THOUSAND_SEPARATOR": ",", 
    "TIME_FORMAT": "P", 
    "TIME_INPUT_FORMATS": [
      "%H:%M:%S", 
      "%H:%M:%S.%f", 
      "%H:%M"
    ], 
    "YEAR_MONTH_FORMAT": "F Y"
  };

  django.get_format = function (format_type) {
    var value = django.formats[format_type];
    if (typeof(value) == 'undefined') {
      return format_type;
    } else {
      return value;
    }
  };

  /* add to global namespace */
  globals.pluralidx = django.pluralidx;
  globals.gettext = django.gettext;
  globals.ngettext = django.ngettext;
  globals.gettext_noop = django.gettext_noop;
  globals.pgettext = django.pgettext;
  globals.npgettext = django.npgettext;
  globals.interpolate = django.interpolate;
  globals.get_format = django.get_format;

}(this));


window.hgettext = function(text) { return gettext(text); };
window.hngettext = function(singular, plural, count) { return ngettext(singular, plural, count); };
