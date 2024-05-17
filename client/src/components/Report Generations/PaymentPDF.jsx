import {
  PDFViewer,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
} from "@react-pdf/renderer";

const PaymentPDF = ({ userData, paymentType, paymentAmount }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <View style={styles.section}>
        <Text style={styles.header}>Payment Details</Text>
        <Text>Email: {userData.email}</Text>
        <Text>Username: {userData.username}</Text>
        <Text>Payment Type: {paymentType}</Text>
        <Text>Amount: {paymentAmount}</Text>
      </View>
    </Page>
  </Document>
);

const styles = StyleSheet.create({
  page: {
    flexDirection: "row",
    backgroundColor: "#E4E4E4",
  },
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  header: {
    fontSize: 20,
    marginBottom: 10,
    textAlign: "center",
  },
});
