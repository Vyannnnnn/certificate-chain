// SPDX-License-Identifier: MIT

pragma solidity ^0.8.20;

contract CertificateRegistry {
    struct Certificate {
        string certificateId;
        uint256 issueAt;
        bool exists;
    }

    mapping(string => Certificate) private certificates;

    event CertificateIssued(string certificateId, uint256 issueAt);

    function issueCertificate(string memory certificateId) public {
        require(!certificates[certificateId].exists, "Certificate already exists.");
        certificates[certificateId] = Certificate({
            certificateId: certificateId,
            issueAt: block.timestamp,
            exists: true
        });
        emit CertificateIssued(certificateId, block.timestamp);
    }

    function verifyCertificate(string memory certificateId) public view returns (bool exists, uint256 issueAt) {
        Certificate memory cert = certificates[certificateId];
        return (cert.exists, cert.issueAt);
    }
}