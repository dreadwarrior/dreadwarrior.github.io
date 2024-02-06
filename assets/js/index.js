import { awesompleteFilter } from './awesomplete-filter';
import { themeSwitcher} from "./theme-switcher";
import { tooltip } from "./tooltip";
import { chooseBook } from "./choose-book";
import { navigation } from "./navigation";

awesompleteFilter();
themeSwitcher('#theme-switch');
tooltip('.tooltip');
chooseBook('#random-book-chooser');
navigation();