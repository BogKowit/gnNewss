## Main

Aplikacja polegać będzie na wyświetlaniu newsów.
Aplikację uruchamiami npm run dev lub na stronie
https://newsapi.org/s/poland-news-api
# Podział ekranu

Header
Menu boczne
Główny content
Footer

Powinien zawierać:

# TODO Header

1. nazwę naszej wspaniałej aplikacji, która będzie linkiem przekierowującym na główną stronę aplikacji
2. przycisk umożliwiający zmianę widoku wyświetlanych newsów (możliwe opcje: lista, kafelki) - do przechowywania stanu wybranej opcji wykorzystaj redux'a 3.
3. TODO:Przycisk, po którego przyciśnięciu otworzy się popup.
4. Niech treścią popupu będzie opis tego, co sprawiło Ci największą trudność w tym zadaniu oraz co sprawiło Ci największą frajdę.

# TODO Główny content

1. listę Państw (nie muszą być wszystkie)
2. flagę danego kraju przed jego nazwą 😉
3. Kliknięcie na dane Państwo powinno przekierować użytkownika na stronę z newsami dla danego państwa.
4. Niech struktura urla będzie następująca: /country/[kraj]

# TODO Główny content

1. Powinien zawierać newsy w postaci listy bądź kafelek (w zależności od wybranej opcji w headerze).
2. Lista powinna zawierać takie pozycje jak: tytuł, nazwa źródła oraz data publikacji
3. Kafelki powinny zawierać dodatkowo miniaturkę (jeżeli występuje) oraz zajawkę.
4. TODO: Kliknięcie na danego newsa powinno otworzyć popupa z jego treścią, a także autorem oraz urlem do strony, skąd dany news został pobrany.

# TODO Footer

1. aktualną godzinę
2. liczbę artykułów, które są wyświetlane w głównym contencie

# TODO Zadanie dodatkowe

1. TODO: zmiany języka interfejsu aplikacji. Niech możliwość zmiany języka znajduje się w headerze. Pamiętaj,
2. TODO: otestować react-test-lib
