import React, { Component } from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  ImageBackground,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
  ActivityIndicator,
  Linking,
} from 'react-native';
import { Header, SearchBar } from 'react-native-elements';
import axios from 'axios';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

export default class SpaceCraft extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usingOffline: false,
      exampledata: {
        count: 26,
        flag: 'example data 12321',
        next:
          'https://ll.thespacedevs.com/2.0.0/config/spacecraft/?limit=10&offset=10&order=name',
        previous: null,
        results: [
          {
            id: 10,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/10/',
            name: 'Apollo Command/Service Module',
            agency: {
              id: 999,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/999/',
              name: 'North American Aviation',
              featured: false,
              type: null,
              country_code: '',
              abbrev: '',
              description:
                'North American Aviation (NAA) was a major American aerospace manufacturer, responsible for a number of historic aircraft, including the T-6 Texan trainer, the P-51 Mustang fighter, the B-25 Mitchell bomber, the F-86 Sabre jet fighter, the X-15 rocket plane, and the XB-70, as well as Apollo command and service module, the second stage of the Saturn V rocket, the Space Shuttle orbiter and the B-1 Lancer.',
              administrator: null,
              founding_year: '1928',
              launchers: 'North American X-15',
              spacecraft: '',
              parent: 'Boeing',
              image_url: null,
            },
            in_use: false,
            capability: 'Cargo and Human Transportation to Lunar Orbit',
            maiden_flight: '1966-02-26',
            human_rated: true,
            crew_capacity: 3,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/apollo2520command2fservice2520module_image_20190207032507.jpeg',
            nation_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/apollo2520command2fservice2520module_image_20190207032507.png',
            wiki_link:
              'https://en.wikipedia.org/wiki/Apollo_Command/Service_Module',
            info_link: '',
          },
          {
            id: 17,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/17/',
            name: 'Automated Transfer Vehicle (ATV)',
            agency: {
              id: 115,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/115/',
              name: 'Arianespace',
              featured: true,
              type: 'Commercial',
              country_code: 'FRA',
              abbrev: 'ASA',
              description:
                "Arianespace SA is a multinational company founded in 1980 as the world's first commercial launch service provider. It undertakes the production, operation, and marketing of the Ariane programme. Their vehicles launch exclusively from French Guiana in South America.",
              administrator: 'CEO: Stéphane Israël',
              founding_year: '1980',
              launchers: 'Ariane 5 | Vega',
              spacecraft: '',
              parent: null,
              image_url:
                'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/arianespace_image_20190207032425.jpeg',
            },
            in_use: false,
            capability: 'Cargo Earth Orbit Logistics',
            maiden_flight: '2008-03-09',
            human_rated: false,
            crew_capacity: null,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/automated2520transfer2520vehicle25202528atv2529_image_20190207032508.jpeg',
            nation_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/automated2520transfer2520vehicle25202528atv2529_image_20190207032508.png',
            wiki_link:
              'https://en.wikipedia.org/wiki/Automated_Transfer_Vehicle',
            info_link: '',
          },
          {
            id: 7,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/7/',
            name: 'Cargo Dragon 2',
            agency: {
              id: 121,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
              name: 'SpaceX',
              featured: true,
              type: 'Commercial',
              country_code: 'USA',
              abbrev: 'SpX',
              description:
                'Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX has many pads, on the East Coast of the US they own SLC-40 at Cape Canaveral and LC-39A at the Kennedy Space Center for their lower inclination launches. They also own SLC-4E at Vandenberg, California for their high inclination launches. Another site is also being developed at Boca Chica, Texas.',
              administrator: 'CEO: Elon Musk',
              founding_year: '2002',
              launchers: 'Falcon',
              spacecraft: 'Dragon',
              parent: null,
              image_url:
                'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/spacex_image_20190207032501.jpeg',
            },
            in_use: true,
            capability: 'Cargo Earth Orbit Logistics',
            maiden_flight: '2020-12-06',
            human_rated: false,
            crew_capacity: null,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/cargo_dragon_2_image_20201124225131.jpeg',
            nation_url: null,
            wiki_link: 'https://en.wikipedia.org/wiki/Dragon_2',
            info_link: 'https://www.spacex.com/dragon',
          },
          {
            id: 22,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/22/',
            name: 'Crew Capsule 1',
            agency: {
              id: 141,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/141/',
              name: 'Blue Origin',
              featured: true,
              type: 'Commercial',
              country_code: 'USA',
              abbrev: 'BO',
              description:
                'Blue Origin is an American privately funded aerospace manufacturer and spaceflight services company set up by Amazon.com founder Jeff Bezos with its headquarters in Kent, Washington. The company is developing technologies to enable private human access to space with the goal to dramatically lower costs and increase reliability. Blue Origin currently launches its New Shepard sub-orbital vehicle from its West Texas launch site, they are currently constructing a launch pad for their orbital vehicle New Glenn at Cape Canaveral LC-36.',
              administrator: 'CEO: Jeff Bezos',
              founding_year: '2000',
              launchers: 'New Shepard | New Glenn',
              spacecraft: '',
              parent: null,
              image_url:
                'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/blue2520origin_image_20190207032427.jpeg',
            },
            in_use: false,
            capability: 'It carries cargo.',
            maiden_flight: '2015-04-29',
            human_rated: false,
            crew_capacity: null,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/crew2520capsule25201_image_20190309100308.jpg',
            nation_url: null,
            wiki_link: '',
            info_link: '',
          },
          {
            id: 21,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/21/',
            name: 'Crew Capsule 2.0',
            agency: {
              id: 141,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/141/',
              name: 'Blue Origin',
              featured: true,
              type: 'Commercial',
              country_code: 'USA',
              abbrev: 'BO',
              description:
                'Blue Origin is an American privately funded aerospace manufacturer and spaceflight services company set up by Amazon.com founder Jeff Bezos with its headquarters in Kent, Washington. The company is developing technologies to enable private human access to space with the goal to dramatically lower costs and increase reliability. Blue Origin currently launches its New Shepard sub-orbital vehicle from its West Texas launch site, they are currently constructing a launch pad for their orbital vehicle New Glenn at Cape Canaveral LC-36.',
              administrator: 'CEO: Jeff Bezos',
              founding_year: '2000',
              launchers: 'New Shepard | New Glenn',
              spacecraft: '',
              parent: null,
              image_url:
                'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/blue2520origin_image_20190207032427.jpeg',
            },
            in_use: true,
            capability: 'Crew and Cargo Flights',
            maiden_flight: '2017-12-12',
            human_rated: false,
            crew_capacity: 1,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/crew2520capsule25202.0_image_20190309095011.jpeg',
            nation_url: null,
            wiki_link: '',
            info_link: '',
          },
          {
            id: 6,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/6/',
            name: 'Crew Dragon 2',
            agency: {
              id: 121,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
              name: 'SpaceX',
              featured: true,
              type: 'Commercial',
              country_code: 'USA',
              abbrev: 'SpX',
              description:
                'Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX has many pads, on the East Coast of the US they own SLC-40 at Cape Canaveral and LC-39A at the Kennedy Space Center for their lower inclination launches. They also own SLC-4E at Vandenberg, California for their high inclination launches. Another site is also being developed at Boca Chica, Texas.',
              administrator: 'CEO: Elon Musk',
              founding_year: '2002',
              launchers: 'Falcon',
              spacecraft: 'Dragon',
              parent: null,
              image_url:
                'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/spacex_image_20190207032501.jpeg',
            },
            in_use: true,
            capability: 'Crew Flights to ISS',
            maiden_flight: '2019-03-02',
            human_rated: true,
            crew_capacity: 4,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/crew2520dragon25202_image_20200117151409.jpeg',
            nation_url: null,
            wiki_link: 'https://en.wikipedia.org/wiki/Dragon_2',
            info_link: 'https://www.spacex.com/crew-dragon',
          },
          {
            id: 9,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/9/',
            name: 'CST-100 Starliner',
            agency: {
              id: 80,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/80/',
              name: 'Boeing',
              featured: false,
              type: 'Commercial',
              country_code: 'USA',
              abbrev: 'BA',
              description:
                'Boeing as a space agency has recently provided NASA with assistance on sending humans to the ISS from American with both their construction of the CST-100 Starliner crew capsule and their work on the SLS Avionics to return to the moon and beyond. Their ventures in GPS satellite systems and Tracking and Data Relay Satellites provide information about earth-orbiting craft to stations on the ground. They also enable research on the ISS and will be helping with the construction of the Lunar Gateway.',
              administrator: 'Leanne Caret',
              founding_year: '2002',
              launchers: 'SLS',
              spacecraft: 'Starliner',
              parent: null,
              image_url: null,
            },
            in_use: true,
            capability: 'Cargo and Human Transportation',
            maiden_flight: '2019-08-17',
            human_rated: true,
            crew_capacity: 7,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/cst-100_starlin_image_20200512130427.jpg',
            nation_url: null,
            wiki_link: 'https://en.wikipedia.org/wiki/Boeing_CST-100_Starliner',
            info_link: 'http://www.boeing.com/space/starliner/',
          },
          {
            id: 19,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/19/',
            name: 'Cygnus Enhanced',
            agency: {
              id: 257,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/257/',
              name: 'Northrop Grumman Innovation Systems',
              featured: true,
              type: 'Commercial',
              country_code: 'USA',
              abbrev: 'NGIS',
              description:
                'Northrup Grumman Innovation Systems designs, builds and delivers space, defence and aviation-related systems to customers around the world. They aquired Orbital ATK in 2018 along with its launchers and ongoing missions. Antares launches from Wallops in Virginia. Minotaur has many launch sites, with the most active now being Cape Canaveral and Vandenberg. Pegasus is an air launched vehicle from an aircraft and so has many launch locations.',
              administrator: 'CEO: Wesley G. Bush',
              founding_year: '2015',
              launchers: 'Antares | Minotaur | Pegasus',
              spacecraft: 'Cygnus',
              parent: null,
              image_url:
                'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/northrop2520grumman2520innovation2520systems_image_20190207032451.jpeg',
            },
            in_use: true,
            capability: 'Cargo Earth Orbit Logistics',
            maiden_flight: '2015-12-06',
            human_rated: false,
            crew_capacity: null,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/cygnus2520enhanced_image_20190207032513.jpeg',
            nation_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/cygnus2520enhanced_image_20190207032514.png',
            wiki_link: 'https://en.wikipedia.org/wiki/Cygnus_(spacecraft)',
            info_link: '',
          },
          {
            id: 5,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/5/',
            name: 'Cygnus Standard',
            agency: {
              id: 257,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/257/',
              name: 'Northrop Grumman Innovation Systems',
              featured: true,
              type: 'Commercial',
              country_code: 'USA',
              abbrev: 'NGIS',
              description:
                'Northrup Grumman Innovation Systems designs, builds and delivers space, defence and aviation-related systems to customers around the world. They aquired Orbital ATK in 2018 along with its launchers and ongoing missions. Antares launches from Wallops in Virginia. Minotaur has many launch sites, with the most active now being Cape Canaveral and Vandenberg. Pegasus is an air launched vehicle from an aircraft and so has many launch locations.',
              administrator: 'CEO: Wesley G. Bush',
              founding_year: '2015',
              launchers: 'Antares | Minotaur | Pegasus',
              spacecraft: 'Cygnus',
              parent: null,
              image_url:
                'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/northrop2520grumman2520innovation2520systems_image_20190207032451.jpeg',
            },
            in_use: true,
            capability: 'Cargo Earth Orbit Logistics',
            maiden_flight: '2013-09-18',
            human_rated: false,
            crew_capacity: null,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/cygnus2520standard_image_20190207032514.jpeg',
            nation_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_nation/cygnus2520standard_image_20190207032515.png',
            wiki_link: 'https://en.wikipedia.org/wiki/Cygnus_(spacecraft)',
            info_link: '',
          },
          {
            id: 3,
            url: 'https://ll.thespacedevs.com/2.2.0/config/spacecraft/3/',
            name: 'Dragon 1',
            agency: {
              id: 121,
              url: 'https://ll.thespacedevs.com/2.2.0/agencies/121/',
              name: 'SpaceX',
              featured: true,
              type: 'Commercial',
              country_code: 'USA',
              abbrev: 'SpX',
              description:
                'Space Exploration Technologies Corp., known as SpaceX, is an American aerospace manufacturer and space transport services company headquartered in Hawthorne, California. It was founded in 2002 by entrepreneur Elon Musk with the goal of reducing space transportation costs and enabling the colonization of Mars. SpaceX has many pads, on the East Coast of the US they own SLC-40 at Cape Canaveral and LC-39A at the Kennedy Space Center for their lower inclination launches. They also own SLC-4E at Vandenberg, California for their high inclination launches. Another site is also being developed at Boca Chica, Texas.',
              administrator: 'CEO: Elon Musk',
              founding_year: '2002',
              launchers: 'Falcon',
              spacecraft: 'Dragon',
              parent: null,
              image_url:
                'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/agency_images/spacex_image_20190207032501.jpeg',
            },
            in_use: true,
            capability: 'ISS Logistics',
            maiden_flight: '2010-12-08',
            human_rated: false,
            crew_capacity: null,
            image_url:
              'https://spacelaunchnow-prod-east.nyc3.digitaloceanspaces.com/media/orbiter_images/dragon25201_image_20190207032515.jpeg',
            nation_url: null,
            wiki_link: 'https://en.wikipedia.org/wiki/Dragon_(spacecraft)',
            info_link: 'https://www.spacex.com/dragon',
          },
        ],
      },
      data: {},
      searchresults: [],
      loading: true,
      search: '',
    };
  }
  componentDidMount() {
    this.getData();
  }
  getData = () => {
    axios
      .get('https://ll.thespacedevs.com/2.0.0/config/spacecraft/?order=name')
      .then((data) => {
        this.setState({ data: data.data });
        this.setState({ loading: false });
        //console.log(this.state.data);
      })
      .catch((error) => {
        //this.goTo('homescreen');
        alert(
          'Sorry, something went wrong. Please try again later. the app will now load an offline database.'
        );
        console.error('Error: ' + error.message);
        this.setState({ loading: false });
        this.setState({ data: this.state.exampledata, usingOffline: true });
      });
    this.setState({ loading: false });
  };
  goTo = (screen) => {
    this.props.navigation.navigate(screen);
  };
  renderItem = ({ item }) => {
    //console.log(item.image_url);
    return (
      <TouchableOpacity
        style={styles.spaceButton}
        onPress={() => {
          if (
            item.wiki_link != '' &&
            item.wiki_link != undefined &&
            item.wiki_link != null
          ) {
            Linking.openURL(item.wiki_link).catch((err) => {
              alert("couldn't load page", err.message);
            });
          } else {
            alert("couldn't load page");
          }
        }}>
        <ImageBackground
          style={{ width: '100%', height: 250, resizeMode: 'contain' }}
          source={{ uri: item.image_url }}>
          <Text style={styles.cardTitle}>{item.name}</Text>
          <Text style={styles.cardText}>
            {'Space Agency: ' + item.agency.name}
          </Text>
          <Text style={styles.cardText}>
            {'Manned: ' + (item.human_rated ? 'Yes' : 'No')}
          </Text>
          <Text style={styles.cardText}>
            {'Planned Flight: ' + item.maiden_flight}
          </Text>
          <Text style={styles.cardText}>
            {'In Use: ' + (item.in_use ? 'Yes' : 'No')}
          </Text>
        </ImageBackground>
      </TouchableOpacity>
    );
  };
  keyExtractor = (item, index) => {
    return index.toString();
  };
  searchTheStuff() {
    if (!this.state.usingOffline) {
      if (this.state.search != '') {
        axios
          .get(
            'https://ll.thespacedevs.com/2.0.0/config/spacecraft/?search=' +
              this.state.search
          )
          .then((data) => {
            this.setState({ data: data.data });
            this.setState({ loading: false });
            this.setState({ searching: true });
            //console.log(this.state.data);
          })
          .catch((error) => {
            //this.goTo('homescreen');
            //alert('Sorry, something went wrong. Please try again later.');
            //console.error('Error: ' + error.message);
            this.setState({ loading: false });
            this.setState({ data: this.state.exampledata, usingOffline: true });
          });
        this.setState({ loading: false });
      } else {
        this.getData();
      }
    } else {
      if (this.state.search != '') {
        //console.log('using offline search')
        let search = this.state.exampledata;
        let temp = {
          count: 26,
          next:
            'https://ll.thespacedevs.com/2.0.0/config/spacecraft/?limit=10&offset=10&order=name',
          previous: null,
          results: [],
        };
        for (var i in this.state.exampledata.results) {
          if (
            this.state.exampledata.results[i].name
              .toLowerCase()
              .includes(this.state.search.toLowerCase())
          ) {
            temp.results.push(this.state.exampledata.results[i]);
          }
        }
        this.setState({ data: temp });
      } else {
        this.setState({ data: this.state.exampledata });
      }
    }
  }
  render() {
    if (this.state.data === {}) {
      return (
        <View
          style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <ImageBackground
            source={require('../assets/bg.jpg')}
            style={{ height: '100%', width: '100%' }}>
            <Header
              backgroundColor={'#c1c1c14f'}
              centerComponent={{
                text: 'Stellar',
                style: { color: '#fff', fontSize: 20 },
              }}
            />
            <Image
              source={{
                uri:
                  'https://cdn.shopify.com/s/files/1/0163/4078/t/96/assets/progressring.gif?300130',
              }}
              style={{
                alignSelf: 'center',
                width: 50,
                height: 50,
                marginTop: windowHeight / 2 - 50,
              }}
            />
          </ImageBackground>
        </View>
      );
    } else {
      return (
        <View>
          <ImageBackground
            source={require('../assets/bg.jpg')}
            style={{ height: '100%', width: '100%' }}>
            <Header
              backgroundColor={'#c1c1c14f'}
              centerComponent={{
                text: 'Stellar',
                style: { color: '#fff', fontSize: 20 },
              }}
            />
            <Text style={styles.title}>Spacecraft</Text>
            <SearchBar
              searchIcon={
                <Image
                  source={
                    'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-gray-cross-icon-free-illustration-image_1338616.jpg'
                  }
                />
              }
              clearIcon={
                <Image
                  source={
                    'https://png.pngtree.com/element_our/20190601/ourmid/pngtree-gray-cross-icon-free-illustration-image_1338616.jpg'
                  }
                />
              }
              onChangeText={(text) => {
                this.setState({ search: text });
                this.searchTheStuff();
              }}
              placeholder="Type here to search..."
              value={this.state.search}
            />
            <FlatList
              data={this.state.data.results}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              horisontal
              showsHorizontalScrollIndicator
            />
            <TouchableOpacity
              style={styles.button}
              onPress={() => {
                this.goTo('homescreen');
              }}>
              <Text style={styles.btext}>Back</Text>
            </TouchableOpacity>
          </ImageBackground>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    fontSize: 30,
    margin: 2,
    color: '#ffffff',
  },
  button: {
    alignSelf: 'center',
    backgroundColor: '#c1c1c19f',
    width: '80%',
    paddingTop: 10,
    paddingBottom: 10,
    margin: 20,
    borderRadius: 10,
  },
  btext: {
    alignSelf: 'center',
    fontSize: 20,
    color: '#000000ff',
  },
  spaceButton: {
    alignSelf: 'center',
    backgroundColor: '#c1c1c19f',
    width: '95%',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
  cardText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: 'white',
    alignSelf: 'center',
  },
});
