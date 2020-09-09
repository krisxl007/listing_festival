=============================================================
This project is built on top of React 16.8.6 and Redux 4.0.4.
=============================================================

To run the application:
1. checkout the code
2. run command to install all required packadges: npm install
3. run command to start the applicaton: npm start
4. might need to disable CORS in browser to be able to fetch the API 
5. open localhost:3000 to view it in the browser, login is admin/admin
6. some screenshots are put under sceenshots folder

=============================================================

Solution: the solution is just simply fetch the given API and convert it to below format, then display the data as required. In some cases the API returns the payload without some fields(festival name/recordLabel etc.), they will be put in a 'Unknown' entity. Also a notificaiton is added to handle some http issues.

[
    {
        "labelName": "label_1",
        "bands": [
            {
                "bandName": "band_name_1",
                "festivalList": [
                    "festival_1",
                    "festival_2",
                    ...
                ]
            }
            ...
        ]
    }
    ...
]
